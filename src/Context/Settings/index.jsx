import React, { useState } from 'react';

//create context
export const SettingsContext = React.createContext();

//create provider
function SettingsProvider({ children }) {

  const [showCompleted, setShowCompleted] = useState(false);
  const [displayItems, setDisplayItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  //context to be sent
  const values = {
    showCompleted,
    displayItems,
    sort,
    setShowCompleted,
    setDisplayItems,
    setSort
  }
  
  return(
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;