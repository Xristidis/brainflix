import React from 'react';
// import {BrowserRouter, Route, Switch} from 'react-router-dom'; FOR NEXT SPRINT...
import './App.css';
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      {/* <Header name="pete" />
      <Hero /> */}
      <Header />
      <Homepage />
    </div>
  );
}
export default App;
