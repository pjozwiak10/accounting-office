import React, { Component } from 'react';

class Form extends Component {
  state = {
    firstName: '',
    mail: '',
    title: '',
    textarea: '',
    message: '',


    errors: {
      firstName: false,
      mail: false,
      title: false,
      textarea: false,
      correct: false,
    }
  }

  handleChangeInput = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const valid = this.validationForm();

    if (valid.correct) {
      this.setState({
        firstName: '',
        mail: '',
        title: '',
        textarea: '',
        message: 'Twoje zapytanie zostało wysłane, odpowiemy najszybciej jak to możliwe!',

        errors: {
          firstName: false,
          mail: false,
          title: false,
          textarea: false,
          correct: false,
        }
      })
    } else {
      this.setState({
        errors: {
          firstName: !valid.firstName,
          mail: !valid.mail,
          title: !valid.title,
          textarea: !valid.textarea,
          correct: !valid.correct,
        }
      })
    }
  }

  validationForm = () => {
    let firstName = false;
    let mail = false;
    let title = false;
    let textarea = false;
    let correct = false;
    if (this.state.firstName.length > 5) {
      firstName = true;
    }
    if (this.state.mail.indexOf('@') !== -1) {
      mail = true;
    }
    if (this.state.title.length > 5) {
      title = true
    }
    if (this.state.textarea.length > 8) {
      textarea = true;
    }
    if (firstName && mail && title && textarea) {
      correct = true;
    }
    return { firstName, mail, title, textarea, correct }
  }

  componentDidUpdate = () => {
    if (this.state.message !== '') {
      setTimeout(() => {
        this.setState({
          message: '',
        })
      }, 3000)
    }
  }

  render() {
    return (
      <form action="" className="contact__form" onSubmit={this.handleSubmit}>
        <p className="contact__form-element">
          <label htmlFor="" className="contact__form-label">Imię</label>
          <input type="text" name="firstName" className="contact__form-input" value={this.state.firstName} onChange={this.handleChangeInput} />
          {this.state.errors.firstName && <span className="contact__form-error">Podaj minimum 5 znaków</span>}
        </p>
        <p className="contact__form-element">
          <label htmlFor="" className="contact__form-label">E-Mail</label>
          <input type="mail" name="mail" className="contact__form-input" value={this.state.mail} onChange={this.handleChangeInput} />
          {this.state.errors.mail && <span className="contact__form-error">Podaj adres e-mail</span>}
        </p>
        <p className="contact__form-element contact__form-element--big">
          <label htmlFor="" className="contact__form-label">Tytuł Wiadomości</label>
          <input type="text" name="title" className="contact__form-input" value={this.state.title} onChange={this.handleChangeInput} />
          {this.state.errors.title && <span className="contact__form-error">Podaj minimum 5 znaków</span>}
        </p>
        <p className="contact__form-element contact__form-element--big">
          <label htmlFor="" className="contact__form-label">Wiadomość</label>
          <textarea name="textarea" id="" className="contact__form-textarea" value={this.state.textarea} onChange={this.handleChangeInput}></textarea>
          {this.state.errors.textarea && <span className="contact__form-error">Podaj minimum 8 znaków</span>}
        </p>
        <input type="submit" className="contact__form-button" value="Wyślij" />
        {this.state.message && <h3 className="contact__form-final-message">{this.state.message}</h3>}
      </form>
    );
  }
}

export default Form;