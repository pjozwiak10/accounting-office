import React from 'react';
import PriceList from '../Layouts/PriceList/PriceList';
import Footer from '../Layouts/StartApp/Footer';
import SmallerHeader from './SmallerHeader';

const PriceListApp = () => {

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
  const title = 'Rzetelność, fachowość i wysoka jakość usług księgowych dla twojej firmy w rozsądnej cenie.';

  return (
    <>
      <SmallerHeader title={title} buttonContent='Cennik' />
      <PriceList />
      <Footer />
    </>
  );
}

export default PriceListApp;