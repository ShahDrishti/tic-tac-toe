import { useState } from 'react';


export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((prev) => !prev);
    }

    let playerName = <span className="player-name">{name}</span>
    let buttonName = "Edit"

    if (isEditing) {
        playerName = <input type="text" required />
        buttonName = "Save"
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonName}</button>
        </li>
    );




}