import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';

function List({ list, toggleComplete, deleteItem }) {
  //utilizing the useContext hook//We use the useContext hook to access the SettingsContext and destructure the displayItems value from the context.
  const { displayItems, showCompleted } = useContext(SettingsContext);

  // Filter the list based on the showCompleted value
  const filteredList = showCompleted ? list : list.filter(item => !item.complete);
  //This ensures that only a maximum of displayItems items are included in the itemsToDisplay array.
  const itemsToDisplay = filteredList.slice(0, displayItems);

  return (
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