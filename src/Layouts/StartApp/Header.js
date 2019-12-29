import React, { Component } from 'react';
import Slide from './Slide';
import slide1 from '../../images/header/slide-1.jpg';
import slide2 from '../../images/header/slide-2.jpg';
import slide3 from '../../images/header/slide-3.jpg';

class Header extends Component {
  state = {
    images: [
      slide1,
      slide2,
      slide3,
    ],
    currentIndex: 0,
    transformValue: 0,
  }

  description = {
    h1: ['Prestige Biuro Rachunkowe', 'Zajmij się swoim biznesem!', 'Kompleksowa obsługa'],
    h2: ['Nowoczesność to nasza zaleta', 'Sprawy rachunkowe zostaw nam.', 'Atrakcyjne ceny i rabaty. Sprawdź!']
  }

  componentDidMount = () => {
    this.clsInterval = setInterval(this.automaticSlider, 5000)
  }

  componentWillUnmount = () => {
    clearInterval(this.clsInterval)
  }

  automaticSlider = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      this.setState({
        currentIndex: 0,
        transformValue: 0,
      })
    } else {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1,
        transformValue: prevState.transformValue + -(this.slideWidth()),
      }))
    }
  }



  onNextSlide = () => {
    clearInterval(this.clsInterval)
    if (this.state.currentIndex === this.state.images.length - 1) {
      this.setState({
        currentIndex: 0,
        transformValue: 0,
      })
    } else {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1,
        transformValue: prevState.transformValue + -(this.slideWidth())
      }))
    }
    this.componentDidMount()
  }

  slideWidth = () => {
    return document.querySelector('.header-slider__slide').clientWidth;
  }

  onPreviousSlide = () => {
    clearInterval(this.clsInterval)
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: 0,
        transformValue: 0,
      })
    } else {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
        transformValue: prevState.transformValue + (this.slideWidth()),
      }))
    }
    this.componentDidMount()
  }
  render() {
    return (
      <header className="header-slider">
        <div className="header-slider__slide-container"
          style={{
            transform: `translateX(${this.state.transformValue}px)`,
            transition: '1s linear',
          }}
        >
          <Slide image={this.state.images[0]} descriptionH1={this.description.h1[0]} descriptionH2={this.description.h2[0]} />
          <Slide image={this.state.images[1]} descriptionH1={this.description.h1[1]} descriptionH2={this.description.h2[1]} />
          <Slide image={this.state.images[2]} descriptionH1={this.description.h1[2]} descriptionH2={this.description.h2[2]} />
        </div>
        <span className="fa fa-chevron-left" aria-hidden="true" onClick={this.onPreviousSlide}></span>
        <span className="fa fa-chevron-right" aria-hidden="true" onClick={this.onNextSlide}></span>
      </header>
    );
  }
}

export default Header;