import React from 'react';

const Service = (props) => {
  return (
    <li className="price-list__list-item"><i className="fa fa-check" aria-hidden="true"></i>{props.service}</li>
  );
}

export default Service;