import React from 'react';
import './ImagemFundo.scss';

import fundoMobile1 from '../../assets/fundoMobile1.jpg';
//import fundoMobile2 from '../../assets/fundoMobile2.jpg';

function ImagemFundo() {
  return (
    <div className="background">
      <img src={fundoMobile1} alt="Fundo do site" />
    </div>
  );
}

export default ImagemFundo;
