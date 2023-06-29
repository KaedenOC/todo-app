import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo';
import SettingsForm from './Components/settingsForm';

function App() {
    return (
      <>
      <Header />
      <Todo />
      <SettingsForm />
      <Footer />
      </>
    );
  };

  export default App;
