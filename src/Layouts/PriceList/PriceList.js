import React from 'react';
import Service from './Service';
import ExamplePrice from './ExamplePrice';

const services = [
  'liczba dokumentów do zaksięgowania w danym miesiącu;',
  'rodzaj prowadzonej ewidencji księgowej;',
  'w przypadku obsługi kadr i płac, liczba zatrudnionych pracowników;',
  'sporządzanie dodatkowych dokumentów, rejestrów, ewidencji;',
  'stopień trudności prac wykonywanych przez nasze biuro rachunkowe. Operacje gospodarcze mają różny stopień skomplikowania na gruncie obowiązujących przepisów, szczególnie podatkowych i dotyczących rachunkowości;',
  'dodatkowe czynności – pomoc w redagowaniu pism wyjaśniających, wezwań do zapłaty, rozliczanie rozrachunków, itp.',
]

const PriceListApp = () => {

  const items = services.map((service, index) => (
    <Service key={index} service={service} />
  ))

  return (

    <section className="price-list">
      <h2 className="price-list__header">Biuro rachunkowe Prestige Szczecin - Cennik</h2>
      <p className="price-list__information">Ze względu na zróżnicowane potrzeby i wymagania naszych Klientów, wysokość opłat za nasze usługi ustalana jest indywidualnie.</p>
      <h2 className="price-list__smaller-header">Wpływ na cenę usługi ma między innymi:</h2>
      <ul className="price-list__list">
        {items}
      </ul>
      <ExamplePrice />
      <section className="additional-services">
        <h1 className="additional-services__header">Wybrane dodatkowe usługi</h1>
        <ul className="additional-services__list">
          <li className="price-list__list-item"><i className="fa fa-check" aria-hidden="true"></i>Sprawozdania do GUS - od 100,00 zł;</li>
          <li className="price-list__list-item"><i className="fa fa-check" aria-hidden="true"></i>Wniosek o wypłatę miesięcznego dofinansowania do PFRON - od 30,00 zł;</li>
          <li className="price-list__list-item"><i className="fa fa-check" aria-hidden="true"></i>Sporządzanie wniosków o dotację z PUP - od 100,00 zł (w przypadku podpisania umowy o prowadzenie ewidencji księgowych, kwota ta jest odliczana od bieżącej ceny usługi);</li>
        </ul>
      </section>
      <h2 className="additional-description">Prosimy o kontakt z naszym biurem rachunkowym,
    byśmy mogły przedstawić Państwu ofertę i szczegółowy cennik.</h2>
      <p className="additional-description-second">Podane ceny są kwotami netto.
      Powyższy cennik służy do wyliczenia szacunkowych kosztów współpracy
    i nie stanowi oferty w rozumieniu art. 66 Kodeksu cywilnego.</p>
    </section>

  );
}

export default PriceListApp;