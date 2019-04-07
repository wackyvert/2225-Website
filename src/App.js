import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Nav from './Nav';
import Images from "./Images";
import Header from "./Header";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
            <a name = "home"></a>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
          <Images/>
            <hr/>
            <a name = "WhoAreWe"></a>
            <h1 align="center">
                R.U.S.T. 2225 - Who are we?
            </h1>
            <p>
                Established in 2007, Robots Uniting Students Together or "R.KU.S.T." aims to do what our name implies
                - unite students of Champlin Park together, through the fun that is the First Robotics Competition.
            </p>
            <hr/>
            <a name="contact"></a>
            <h1>
                Contact Us
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun
                t mollit anim id est laborum.
            </p>
        </header>






      </div>






    );
  }
}

export default App;
