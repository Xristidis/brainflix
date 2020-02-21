import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Upload from "./pages/upload/Upload";

function App() {
  return (
    <div className="App">
      {/* <Header name="pete" />
      <Hero /> */}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
