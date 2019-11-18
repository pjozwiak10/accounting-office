import React from 'react';
import Footer from '../Layouts/StartApp/Footer';
import Contact from '../Layouts/Contact/Contact';

const ContactApp = () => {

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  return (
    <>
      <Contact />
      <Footer />
    </>
  );
}

export default ContactApp;