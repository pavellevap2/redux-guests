import React from "react";

class RootGuestInput extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             isTextField: false,
             changedGuest: ""
         }
     }
    render(){
        let {isTextField} = this.state;
        let {guest, removeGuest, updateGuest} = this.props;

         return(
            <div>
                {!isTextField
                    ? <p onDoubleClick={() => this.setState({isTextField: true})}>
                        {guest.name}
                        <input type="checkbox"
                               onClick={() => guest.alone = !guest.alone }
                        />
                        <button onClick={removeGuest}>X</button>
                    </p>

                    : <input
                        onBlur={() => {
                            this.setState({isTextField : false});

                        }}
                        value= {guest.name}
                        onChange={(e) => this.setState({changedGuest: e.target.value})}
                    />
                }
            </div>
        )
    }

}

class Root extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfGuests: "",
        }
    }

    render(){
        let {handleInput, inputValue, addGuest, guests, removeGuest} = this.props;

        return(
            <div>
                <input type="text" value={inputValue}
                       onChange={handleInput}
                       onKeyPress={addGuest}/>
                <h3>number of guests</h3>

                <div>
                    <ul>
                        {guests.map((guest, i) =>
                            <div key={i}>
                               <RootGuestInput
                                   guest= {guest}
                                   removeGuest={() => removeGuest(i)}
                               />
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Root;