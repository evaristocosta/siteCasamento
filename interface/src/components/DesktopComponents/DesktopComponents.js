import React from 'react';
import './DesktopComponents.scss';
import fundoDesktop1 from '../../assets/fundoDesktop1.jpg';
import logo from '../../assets/logoCasamento.svg';
import qrcode from '../../assets/qrcode.svg';

function DesktopComponents() {
  return (
    <div className="desktop">
      <div className="background">
        <img src={fundoDesktop1} alt="Fundo do site" />
      </div>
      <div className="fundo">
        <div className="conteudo">
          <header>
            {/* <div className="titulo">Ana e Lucas</div> */}
            <img src={logo} alt="Logo AL" />
            <div className="data">25 de março de 2023</div>
          </header>

          <div className="centro">
            <div className="texto-centro">
              <h1>Acesse esse site pelo seu celular!</h1>
            </div>
            <img src={qrcode} alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopComponents;
