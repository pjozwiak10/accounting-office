import React from 'react';
import Footer from '../Layouts/StartApp/Footer';
import Services from '../Layouts/Services/Services';
import SmallerHeader from './SmallerHeader';

const ServicesApp = () => {

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
  const title = `Zapewniamy kompleksową obsługę w zakresie księgowym, finansowym oraz prawnym.`;

  return (
    <>
      <SmallerHeader title={title} buttonContent='Oferta' />
      <Services />
      <Footer />
    </>
  );
}

export default ServicesApp;