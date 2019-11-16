import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';

class Services extends Component {
  state = {}

  componentDidMount = () => {
    const config = {
      origin: 'center',
      duration: 1000,
      delay: 150,
      distance: '0px',
      scale: 0.2,
      opacity: 0.2,
      easing: 'ease',

    }

    ScrollReveal().reveal(this.refs.check1, config);
    config.delay += 150;
    ScrollReveal().reveal(this.refs.check2, config);
    config.delay += 150;
    ScrollReveal().reveal(this.refs.check3, config);
    config.delay += 150;
    ScrollReveal().reveal(this.refs.check4, config);
    config.delay += 150;
    ScrollReveal().reveal(this.refs.check5, config);
    config.delay += 150;
    ScrollReveal().reveal(this.refs.check6, config);
    config.delay += 150;
    ScrollReveal().reveal(this.refs.check7, config);

  }

  render() {
    return (
      <section className="services">
        <h1 className="services__main-header">Biuro rachunkowe Prestige Szczecin - Oferta</h1>
        <section className="services__elements-all">
          <ul className="services__elements">
            <h1 className="services__side-header">Świadczymy usługi w zakresie:</h1>
            <li className="services__element">
              <i className="fa fa-check" aria-hidden="true" ref='check1'></i>
              <p className="services__element-info">prowadzenia podatkowej księgi przychodów i rozchodów oraz ryczałtu ewidencjonowanego w zakresie zgodnym z rozporządzeniem Ministra Finansów,</p>
            </li>
            <li className="services__element">
              <i className="fa fa-check" aria-hidden="true" ref='check2'></i>
              <p className="services__element-info">prowadzenia pełnej księgowości zgodnie z ustawą z dnia 29 września 1994 r. o rachunkowości (Dz. U. nr 121 poz. 591, ze zm.),</p>
            </li>
            <li className="services__element">
              <i className="fa fa-check" aria-hidden="true" ref='check3'></i>
              <p className="services__element-info">prowadzenia ewidencji dla potrzeb podatku od towarów i usług,</p>
            </li>
            <li className="services__element">
              <i className="fa fa-check" aria-hidden="true" ref='check4'></i>
              <p className="services__element-info">obsługi kadrowo – płacowej,</p>
            </li>
            <li className="services__element">
              <i className="fa fa-check" aria-hidden="true" ref='check5'></i>
              <p className="services__element-info">rozliczeń rocznych oraz sporządzania deklaracji VZM-1 dotyczącej zwrotu VAT za materiały budowlane,</p>
            </li>
            <li className="services__element">
              <i className="fa fa-check" aria-hidden="true" ref='check6'></i>
              <p className="services__element-info">pomocy przy rejestracji działalności,</p>
            </li>
            <li className="services__element">
              <i className="fa fa-check" aria-hidden="true" ref='check7'></i>
              <p className="services__element-info">sporządzania wniosków o wydanie zaświadczeń do ZUS i US.</p>
            </li>
          </ul>
          <ul className="services__elements">
            <h1 className="services__side-header">Wyróżnia nas:</h1>
          </ul>
        </section>
      </section>
    );
  }
}

export default Services;