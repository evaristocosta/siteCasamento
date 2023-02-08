import React from 'react';
import './ImagemFundo.scss';

import fundoMobile1 from '../../assets/fundoMobile1.jpg';
import fundoMobile2 from '../../assets/fundoMobile2.jpg';
import fundoMobile3 from '../../assets/fundoMobile3.jpg';
import fundoMobile4 from '../../assets/fundoMobile4.jpg';

const numero = getRandomInt(1, 5);

function ImagemFundo() {
  const fundoMobile = () => {
    switch (numero) {
      case 1:
        return fundoMobile1;
      case 2:
        return fundoMobile2;
      case 3:
        return fundoMobile3;
      case 4:
        return fundoMobile4;
      default:
        return fundoMobile1;
    }
  };
  return (
    <div className="background">
      <img src={fundoMobile()} alt="Fundo do site" />
    </div>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export default ImagemFundo;
