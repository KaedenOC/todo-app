import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination } from '@mantine/core';

function List({ list, toggleComplete, deleteItem }) {
  //utilizing the useContext hook//We use the useContext hook to access the SettingsContext and destructure the displayItems value from the context.
  const { displayItems, showCompleted } = useContext(SettingsContext);

  // Filter the list based on the showCompleted value
  const filteredList = showCompleted ? list : list.filter(item => !item.complete);
  //This ensures that only a maximum of displayItems items are included in the itemsToDisplay array.
  const itemsToDisplay = filteredList.slice(0, displayItems);

  const [activePage, setPage] = useState(1);
  const pageCount = Math.ceil(filteredList.length / displayItems);

  const firstItem = (activePage - 1) * displayItems;
  const lastItem = activePage * displayItems;
  const finalItems = itemsToDisplay.slice(firstItem, lastItem);
  return (
    <>
      {finalItems.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>

      ))}
      <Pagination value={activePage} onChange={setPage} total={pageCount} />
    </>
  )
}

export default List;