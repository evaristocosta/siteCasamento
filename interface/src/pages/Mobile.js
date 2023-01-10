import React from 'react';
import './Mobile.scss';
import fundoMobile1 from '../assets/fundoMobile1.jpg';
import fundoMobile2 from '../assets/fundoMobile2.jpg';
import logo from '../assets/logoCasamento.svg';

import { FiGift, FiCheck, FiMapPin } from 'react-icons/fi';

function Mobile() {
  return (
    <div className="principal">
      <div className="background">
        <img src={fundoMobile1} alt="Fundo do site" />
      </div>
      <div className="fundo">
        <div className="conteudo">
          <header>
            {/* <div className="titulo">Ana e Lucas</div> */}
            <img src={logo} alt="Logo AL" />
            <div className="data">25 de março de 2023</div>
          </header>

          <div className="itens">
            <div className="item presentes">
              <div className="bola">
                <FiGift className="icone" />
              </div>
              <div className="texto">Lista de presentes</div>
            </div>

            <div className="item presenca">
              <div className="bola">
                <FiCheck className="icone" />
              </div>
              <div className="texto">Confirmação de presença</div>
            </div>

            <div className="item guia">
              <div className="bola">
                <FiMapPin className="icone" />
              </div>
              <div className="texto">Guia do evento</div>
            </div>
          </div>

          <div className="quadro">
            <div className="quadro-conteudo">
              <p>
                Querido convidado, seja bem-vindo a nossa lista de presentes!
                Pensamos em tudo com muito carinho para que você se sinta à
                vontade para nos presentear com o que sentir vontade.
                Agradecemos sua contribuição nesse momento tão especial e nos
                vemos no grande dia!
              </p>
              <a
                href="https://lista.havan.com.br"
                target="_blank"
                rel="noreferrer"
              >
                Clique aqui para acessar a lista
              </a>
              <p>Código: 24761749-1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
