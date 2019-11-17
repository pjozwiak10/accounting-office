import React from 'react';
import Header from '../Layouts/StartApp/Header';
import Main from '../Layouts/StartApp/Main';
import Footer from '../Layouts/StartApp/Footer';

const StartApp = () => {

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default StartApp;