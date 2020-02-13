import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Logo from './components/logo/Logo'   // do i need to import logo if i want to add it as its own component in header?
import Hero from './components/hero/Hero';




function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
