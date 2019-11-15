import React from 'react';

const Slide = ({ image, descriptionH1, descriptionH2 }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
  }
  return (
    <div className="header-slider__slide" style={styles}>
      <div className="header-slider__description">
        <h1 className="header-slider__description-h1">{descriptionH1}</h1>
        <h2 className="header-slider__description-h2">{descriptionH2}</h2>
      </div>
    </div>
  );
}

export default Slide;