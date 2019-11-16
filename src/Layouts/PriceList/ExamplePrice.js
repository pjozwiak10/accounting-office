import React from 'react';

const ExamplePrice = () => {
  return (
    <section className="example-price">
      <h1 className="example-price__header">Przykładowy cennik naszych usług</h1>
      <h1 className="example-price__smaller-header">Usługi podstawowe:</h1>
      <ul className="example-price__list">
        <li className="example-price__list-item">
          <p className="example-price__list-item-header">Ryczałt ewidencjonowany</p>
          <p className="example-price__list-item-info">od <span className="element">80.00 zł</span>*</p>
        </li>
        <li className="example-price__list-item">
          <p className="example-price__list-item-header">Księga przychodów i rozchodów</p>
          <p className="example-price__list-item-info">od <span className="element">100.00 zł</span>*</p>
        </li>
        <li className="example-price__list-item">
          <p className="example-price__list-item-header">Księgi handlowe</p>
          <p className="example-price__list-item-info">od<span className="element">500.00 zł</span>*</p>
        </li>
        <li className="example-price__list-item">
          <p className="example-price__list-item-header">Obsługa kadrowo-płacowa</p>
          <p className="example-price__list-item-info">od<span className="element">25.00 zł</span>*</p>
        </li>
      </ul>
      <p className="example-price__summary">* Sporządzanie deklaracji PIT, VAT, ZUS jest zawarte w cenie usług podstawowych</p>
    </section>
  );
}

export default ExamplePrice;