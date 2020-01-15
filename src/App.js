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
            <Route path="/accounting-office/" exact component={StartApp} />
            <Route path="/accounting-office/usługi" component={ServicesApp} />
            <Route path="/accounting-office/cennik" component={PriceListApp} />
            <Route path="/accounting-office/kontakt" component={ContactApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


