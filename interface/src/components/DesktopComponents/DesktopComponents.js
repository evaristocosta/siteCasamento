import React from 'react';
import './DesktopComponents.scss';
import fundoDesktop1 from '../../assets/fundoDesktop1.jpg';
import logo from '../../assets/logoCasamento.svg';

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
        </div>
      </div>
    </div>
  );
}

export default DesktopComponents;
