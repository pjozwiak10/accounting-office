import React from 'react';
import image from '../../images/footer/footer.jpg';

const content = 'Nasze biuro rachunkowe powstało z myślą o małych i średnich przedsiębiorstwach, ich potrzebach oraz problemach pojawiających się w trakcie prowadzonej działalności. Posiadamy Certyfikat Księgowy Ministerstwa Finansów numer XXXXX/2007 poświadczający nasze wysokie kwalifikacje. Jesteśmy młodym i dynamicznym zespołem specjalistów, których celem jest ciągłe wspieranie i rozwój naszych przedsiębiorców poprzez zapewnienie im kompleksowej obsługi w zakresie usług księgowych, finansowych oraz prawnych.'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={image} alt="success" className="footer__image" />
      <div className="footer__about">
        <h2 className="footer__about-header">kim jesteśmy</h2>
        <p className="footer__about-content">{content}</p>
        <div className="footer__about-address">
          <p className="footer__about-address-info">Biuro Rachunkowe Prestige</p>
          <p className="footer__about-address-info">ul. Pomorska 115B, pokój 612</p>
          <p className="footer__about-address-info">70-812 Szczecin</p>
          <p className="footer__about-address-info">+48 698 227 887</p>
          <p className="footer__about-address-info">ijozwiak1959@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;