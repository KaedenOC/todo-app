import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings';

import App from './App';

//by wrapping App with the SettingsProvider, it will get context including every child
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
);
