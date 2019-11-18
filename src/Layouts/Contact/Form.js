import React, { Component } from 'react';

class Form extends Component {
  state = {}



  render() {
    return (
      <form action="" className="contact__form">
        <p className="contact__form-element">
          <label htmlFor="" className="contact__form-label">Imię</label>
          <input type="text" name="firstName" className="contact__form-input" />
        </p>
        <p className="contact__form-element">
          <label htmlFor="" className="contact__form-label">E-Mail</label>
          <input type="mail" name="mail" className="contact__form-input" />
        </p>
        <p className="contact__form-element contact__form-element--big">
          <label htmlFor="" className="contact__form-label">Tytuł Wiadomości</label>
          <input type="text" name="title" className="contact__form-input" />
        </p>
        <p className="contact__form-element contact__form-element--big">
          <label htmlFor="" className="contact__form-label">Wiadomość</label>
          <textarea name="textarea" id="" className="contact__form-textarea"></textarea>
        </p>
        <input type="submit" className="contact__form-button" value="Wyślij" />
      </form>
    );
  }
}

export default Form;