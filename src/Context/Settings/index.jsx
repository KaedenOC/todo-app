import React, { useState } from 'react';

//create context
export const SettingsContext = React.createContext();

//create provider
function SettingsProvider({ children }) {

  const [showCompleted, setShowCompleted] = useState(false);
  const [displayItems, setDisplayItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  //function for local storage//todo string is the key
  const localStorage = () => {
    localStorage.setItem('todo', JSON.stringify({displayItems, showCompleted, sort}));
  }

  //context to be sent //settings form will also take this
  const values = {
    showCompleted,
    displayItems,
    sort,
    setShowCompleted,
    setDisplayItems,
    setSort,
    localStorage
  }
  
  return(
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;