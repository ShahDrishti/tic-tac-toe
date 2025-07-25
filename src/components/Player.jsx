import { useState } from 'react';


export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(!isEditing); => schedules a state update to true
        setIsEditing((prev) => !prev);

        if (isEditing) {
            onChangeName(symbol, playerName.toUpperCase());
        }

    }


    //we will get the event value automatically
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    //let btnCaption = "Edit"

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        //btnCaption = "Save"
    }

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );




}