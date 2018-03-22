import React from "react";
import GuestContainer from "../../containers/GuestContainer";
import GuestFilter from "../../components/GuestFilter/GuestFilter"

const countGuests = (guests) => {
    let guestsNumber = guests.length;
    guests.forEach(guest => (!guest.alone) ? guestsNumber += 1: guestsNumber +=0) ;

    return guestsNumber
};


class Root extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guestsNumber: 0,
            guestsType: "all"//all(все гости),alone(без пары),notAlone(c парой)
        }
    }

    render(){
        const {guest, updateNewGuest, addGuest, guests} = this.props;
        let {guestsType} = this.state;

        let lonelyGuests = guests.filter(guest => guest.alone);
        let notLonelyGuests = guests.filter(guest => !guest.alone);
        let currGuestList = guestsType == "all" ? guests : guestsType == "alone" ? lonelyGuests : notLonelyGuests;
        return(
            <div>
                <input type="text" value={guest}
                       onChange={(e) => updateNewGuest(e.target.value)}
                       onKeyPress={(e) =>{
                           if(e.key == "Enter"){
                               addGuest(guest);
                           }
                       }}/>

                <h3>number of guests {countGuests(guests)}</h3>

                <GuestFilter
                    guestsTypeAll={() => this.setState({guestsType: "all"})}
                    guestsTypeAlone={() => this.setState({guestsType: "alone"})}
                    guestsTypeNotAlone={() => this.setState({guestsType: "notAlone"})}/>

                <div>
                    <ul>
                        {currGuestList.map((guest, i) =>
                            <div key={i}>
                                <GuestContainer
                                    guest={guest}
                                    index={i}/>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Root;