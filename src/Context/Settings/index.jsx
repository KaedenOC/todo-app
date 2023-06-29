import React, { useState } from 'react';

//create context
export const SettingsContext = React.createContext();

//create provider
function SettingsProvider({ children }) {

  const [showCompleted, setShowCompleted] = useState(false);
  const [displayItems, setDisplayItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const localStorage = () => {
    localStorage.setItem('displayItems', JSON.stringify(+displayItems));
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
    localStorage.setItem('sort', JSON.stringify(sort));
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