import React from 'react';
import house from '../../images/contact/house.svg';
import mail from '../../images/contact/mail.svg';
import Form from './Form';

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact__header">
        <h1 className="contact__header-text">Skontaktuj się z nami.<br /> Twoja firma na to zasługuje.</h1>
      </header>
      <div className="contact__info">
        <div className="contact__info-element">
          <div className="contact__info-description">
            <p className="contact__info-text">SIEDZIBA FIRMY</p>
            <p className="contact__info-text contact__info-text--small">Budynek Animex Szczecin</p>
            <p className="contact__info-text contact__info-text--small">ul. Pomorska 115B, pokój 612</p>
            <p className="contact__info-text contact__info-text--small">70-812 Szczecin</p>
          </div>
          <i className="fa fa-map-signs contact__info-picture" aria-hidden="true"></i>
        </div>
        <div className="contact__info-element">
          <i className="fa fa-user-o contact__info-picture contact__info-picture--second" aria-hidden="true"></i>
          <div className="contact__info-description">
            <p className="contact__info-text">KONTAKT</p>
            <p className="contact__info-text contact__info-text--small">+48 698 227 887</p>
            <p className="contact__info-text contact__info-text--small">ijozwiak1959@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact__company">
        <img src={house} alt="house" className="contact__company-logo" />
        <div className="contact__company-data">
          <p className="contact__company-data-text contact__company-data-text--important">Biuro Rachunkowe Prestige Iwona Jóźwiak</p>
          <p className="contact__company-data-text">NIP: XXX-XXX-XX-XX</p>
          <p className="contact__company-data-text">Regon: XXXXXXXXX</p>
          <p className="contact__company-data-text">Certyfikat Księgowy Ministerstwa Finansów: XXXXX/2007</p>
        </div>
      </div>
      <div className="contact__message">
        <div className="contact__message-aside">
          <img src={mail} alt="mail" className="contact__message-image" />
          <p className="contact__message-text">Skontaktuj się z nami bezpośrednio przez formularz.</p>
          <p className="contact__message-text contact__message-text--small">Odpowiemy na Twoją wiadomość jeszcze dziś!</p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Contact;