import React from "react";

class Guest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTextField: false,
            newGuestName: ""
        }
    }

    render(){
        let {isTextField, newGuestName} = this.state;
        let {guest, removeGuest, updateGuest, changeGuestType, index} = this.props;

        return(
            <div>
                {!isTextField
                    ? <p onDoubleClick={() => this.setState({isTextField: true, newGuestName: guest.name})}>
                        {guest.name}
                        <input type="checkbox"
                               onChange={() => changeGuestType(index)}
                               checked={!guest.alone}/>
                        <button onClick={() => removeGuest(index)}>X</button>
                    </p>

                    : <input value={newGuestName}
                             onBlur={() => {
                                this.setState({isTextField : false});
                                updateGuest(newGuestName, index);
                            }}
                        onChange={(e) => this.setState({newGuestName: e.target.value})}
                    />
                }
            </div>
        )
    }
}
export default Guest;