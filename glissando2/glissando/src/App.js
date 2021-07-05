import './App.css';
import React, { Component } from "react"
import Navbar from './comps/navbar'
import Home from './comps/HomeComponent'



class App extends Component {
  render() {
      return (
          <div className="App">
            <Navbar />
            <Home />
          </div>
      );
  }
}

export default App;
