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


    const { check1, check2, check3, check4, check5, check6, check7 } = this.refs;
    const refsFirst = [check1, check2, check3, check4, check5, check6, check7];
    refsFirst.forEach(refFirst => {
      ScrollReveal().reveal(refFirst, config);
      config.delay += 150;
    })

    config.delay = 150;

    const { check8, check9, check10, check11, check12, check13 } = this.refs;
    const refsSecond = [check8, check9, check10, check11, check12, check13];
    refsSecond.forEach(refSecond => {
      ScrollReveal().reveal(refSecond, config);
      config.delay += 150;
    })

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
            <li className="services__element">
              <div className="services__div-element">
                <h3 className="services__element-header">KOMPLEKSOWOŚĆ</h3>
                <p className="services__element-info">współpracujemy z radcami prawnymi i adwokatami,</p>
              </div>
              <i className="fa fa-check fa-check--second" aria-hidden="true" ref='check8'></i>
            </li>
            <li className="services__element">
              <div className="services__div-element">
                <h3 className="services__element-header">DOŚWIADCZENIE</h3>
                <p className="services__element-info">posiadamy niezbędne kwalifikacje i stale poszerzamy swoją wiedzę,</p>
              </div>
              <i className="fa fa-check fa-check--second" aria-hidden="true" ref='check9'></i>
            </li>
            <li className="services__element">
              <div className="services__div-element">
                <h3 className="services__element-header">ZAANGAŻOWANIE</h3>
                <p className="services__element-info">pojawiające się wątpliwości wyjaśniamy gruntownie i precyzyjnie,</p>
              </div>
              <i className="fa fa-check fa-check--second" aria-hidden="true" ref='check10'></i>
            </li>
            <li className="services__element">
              <div className="services__div-element">
                <h3 className="services__element-header">CZAS DLA KLIENTÓW</h3>
                <p className="services__element-info">zawsze poświęcamy Naszym klientom niezbędną uwagę i czas,</p>
              </div>
              <i className="fa fa-check fa-check--second" aria-hidden="true" ref='check11'></i>
            </li>
            <li className="services__element">
              <div className="services__div-element">
                <h3 className="services__element-header">SZYBKOŚĆ DZIAŁANIA</h3>
                <p className="services__element-info">niezwłocznie odpowiadamy na pojawiające się pytania i reagujemy na pojawiające się problemy, rozumiemy jak ważne jest to dla naszych Klientów,</p>
              </div>
              <i className="fa fa-check fa-check--second" aria-hidden="true" ref='check12'></i>
            </li>
            <li className="services__element">
              <div className="services__div-element">
                <h3 className="services__element-header">DOSTĘPNOŚĆ</h3>
                <p className="services__element-info">umów spotkanie, zadzwoń, napisz e-mail, zawsze jesteśmy do twojej dyspozycji!</p>
              </div>
              <i className="fa fa-check fa-check--second" aria-hidden="true" ref='check13'></i>
            </li>
          </ul>
          <h2 className="services__summary-text">Zakres oferowanych usług dostosowujemy indywidualnie do potrzeb każdego klienta.</h2>
        </section>
      </section>
    );
  }
}

export default Services;