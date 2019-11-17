import React, { Component } from 'react';
import ContactStrip from './ContactStrip';

class SmallerHeader extends Component {
  state = {}

  scrollImage = () => {
    const heightImage = this.refs.image.clientHeight;
    window.scroll({
      top: heightImage,
      behavior: 'smooth',
    })
  }



  render() {
    return (

      <div className="smaller-header-image" ref='image'>
        <ContactStrip />
        <h2 className="smaller-header-image__info">{this.props.title}</h2>
        <button className="smaller-header-image__button" onClick={this.scrollImage}>{this.props.buttonContent}</button>
      </div>
    );

  }
}

export default SmallerHeader;