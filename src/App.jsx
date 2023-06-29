import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo';
import SettingsForm from './Components/settingsForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/settings" element={<SettingsForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
