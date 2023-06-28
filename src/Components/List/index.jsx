import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';

function List({ list, toggleComplete, deleteItem }) {
  const { displayItems } = useContext(SettingsContext);
  const itemsToDisplay = list.slice(0, displayItems);

  return(
    <>
    {itemsToDisplay.map(item => (
      <div key={item.id}>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        <hr />
      </div>
    ))}
    </>
  )
}

export default List;