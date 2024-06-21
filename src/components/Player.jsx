import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditiClick = () => {
    setIsEditing((editing) => !editing);

    if(isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  let editablePlayerName =  <span className="player-name">{playerName}</span>; 

  if(isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
  }
  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbols">{symbol}</span>
      </span>
      <button onClick={handleEditiClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
