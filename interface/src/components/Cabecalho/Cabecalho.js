import React from 'react';
import './Cabecalho.scss';
import logo from '../../assets/logoCasamento.svg';

function Cabecalho() {
  return (
    <header>
      {/* <div className="titulo">Ana e Lucas</div> */}
      <img src={logo} alt="Logo AL" />
      <div className="data">25 de março de 2023</div>
    </header>
  );
}

export default Cabecalho;
