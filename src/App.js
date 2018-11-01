import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App container">

        <BrowserRouter>
          <div>

            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/service" component={Service}/>
              <Route path="/contact" component={Contact}/>
            </Switch>

          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
