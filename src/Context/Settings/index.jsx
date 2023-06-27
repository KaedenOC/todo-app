import React, { useState } from 'react';

//create context
export const SettingsContext = React.createContext();

//create provider
function SettingsProvider({ children }) {

  const [showCompleted, setShowCompleted] = useState(false);
  const [displayItems, setDisplayItems] = useState(3);

  const values = {
    showCompleted,
    displayItems
  }
  return(
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;