import { useState } from "react";

function Player({ name, symbol, isActive, onChangeName }) {
    const [ playerName, setPlayerName ] = useState(name);
    const [ isEditing, setIsEditing ] = useState(false);
    const [ btnName, setBtnName ] = useState("Edit");
    
    function handleEditClick() {
        setIsEditing((editing) => !editing);
        setBtnName(isEditing ? "Edit" : "Save");
        
        if(isEditing)
            onChangeName(symbol, playerName);
    }

    function handleInputChance(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
              {
                isEditing ? (
                    <input 
                        type="text"
                        defaultValue={playerName}
                        onChange={handleInputChance} 
                    />
                ) 
                :
                <span className="player-name">{playerName}</span>
              }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnName}</button>
        </li>
    );
}

export default Player;