import React, { useEffect, useState } from 'react';

//create context
export const SettingsContext = React.createContext();

//create provider
function SettingsProvider({ children }) {

  const [showCompleted, setShowCompleted] = useState(false);
  const [displayItems, setDisplayItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  //function for local storage//todo string is the key
  const storeLocal = () => {
    localStorage.setItem('todo', JSON.stringify({displayItems, showCompleted, sort}));
  }

  //retrieve our local storage once on page load//life cycle hook
  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todo'))
    if(storage) {
      setDisplayItems(storage.displayItems);
      setShowCompleted(storage.showCompleted);
      setSort(storage.sort);
    }
  }, []);

  //context to be sent //settings form will also take this
  const values = {
    showCompleted,
    displayItems,
    sort,
    setShowCompleted,
    setDisplayItems,
    setSort,
    storeLocal
  }
  
  return(
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;