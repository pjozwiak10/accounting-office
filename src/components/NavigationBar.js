import React, { Component } from 'react';
import Navigation from './Navigation';

class NavigationBar extends Component {
  state = {
    isActive: false,
  }

  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {

    return (
      <>
        <div className="nav-bar">

          <div className="nav-bar__btn">
            <span className="fa fa-bars" aria-hidden="true" onClick={this.handleClick} style={this.state.isActive ? { transform: 'rotate(90deg)' } : null}
            >
            </span>
            <p className="nav-bar__name">Menu</p>
          </div>
        </div>
        <Navigation isActive={this.state.isActive} />
      </>
    );
  }
}

export default NavigationBar;