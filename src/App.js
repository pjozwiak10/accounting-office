import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartApp from './components/StartApp';
import ServicesApp from './components/ServicesApp';
import PriceListApp from './components/PriceListApp';
import ContactApp from './components/ContactApp';
import NavigationBar from './components/NavigationBar';
import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/Project2/" exact component={StartApp} />
            <Route path="/Project2/usługi" component={ServicesApp} />
            <Route path="/Project2/cennik" component={PriceListApp} />
            <Route path="/Project2/kontakt" component={ContactApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


