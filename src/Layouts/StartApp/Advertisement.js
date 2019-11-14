import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import accounting from '../../images/advertisement/accounting.svg';
import bars from '../../images/advertisement/bars.svg';
import headset from '../../images/advertisement/headset.svg';

class Advertisement extends Component {
  state = {}
  componentDidMount = () => {
    const config = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    }

    const configLeft = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    }

    ScrollReveal().reveal(this.refs.headset, config);
    ScrollReveal().reveal(this.refs.bars, configLeft);
    ScrollReveal().reveal(this.refs.accounting, config);

  }
  render() {
    return (
      <section className="advertisements">
        <div className="advertisements__advertisement" ref='headset'>
          <img src={headset} alt="headset" className="advertisements__image" />
          <h2 className="advertisements__header">Masz pytanie? Zadzwoń</h2>
          <p className="advertisements__description">
            Iwona Jóźwiak / tel. 698-227-887
            <br />
            ijozwiak1959@gmail.com
          </p>
        </div>
        <div className="advertisements__advertisement" ref='bars'>
          <img src={bars} alt="bars" className="advertisements__image" />
          <h2 className="advertisements__header">Zajmij się swoją firmą</h2>
          <p className="advertisements__description">
            Finanse i sprawy księgowe zostaw nam.
          </p>
        </div>
        <div className="advertisements__advertisement" ref='accounting'>
          <img src={accounting} alt="accounting" className="advertisements__image" />
          <h2 className="advertisements__header">Jesteśmy dla Ciebie</h2>
          <p className="advertisements__description">
            Zaufanie jest dla nas bardzo ważne, relacja biuro-podatnik jest dla nas kluczowa.
            Nigdy nie łamiemy tej zasady.
            </p>
        </div>
      </section>
    );
  }
}

export default Advertisement;





