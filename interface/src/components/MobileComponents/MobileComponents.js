import React, { useState } from 'react';
import { FiGift, FiCheck, FiMapPin } from 'react-icons/fi';

import './MobileComponents.scss';
import ImagemFundo from '../ImagemFundo';
import Cabecalho from '../Cabecalho';

function MobileComponents() {
  const [abrePresentes, setAbrePresentes] = useState(false);

  return (
    <div className="mobile">
      <ImagemFundo />
      <div className="fundo">
        <div className="conteudo">
          <Cabecalho />

          <div className="itens">
            <div className="item presentes">
              <div
                className="bola"
                onClick={() => setAbrePresentes(!abrePresentes)}
              >
                <FiGift className="icone" />
              </div>
              <div className="texto">Lista de presentes</div>
            </div>

            <div
              className={
                'item presenca ' +
                (abrePresentes && 'bolas-topo primeiro-direita')
              }
            >
              <div className="bola">
                <FiCheck className="icone" />
              </div>
              <div className="texto">Confirmação de presença</div>
            </div>

            <div
              className={
                'item guia ' + (abrePresentes && 'bolas-topo segundo-direita')
              }
            >
              <div className="bola">
                <FiMapPin className="icone" />
              </div>
              <div className="texto">Guia do evento</div>
            </div>
          </div>

          <div className={'quadro ' + (!abrePresentes && 'escondido')}>
            <div className="quadro-conteudo">
              <p>
                Querido convidado, seja bem-vindo a nossa lista de presentes!
                Pensamos em tudo com muito carinho para que você se sinta à
                vontade para nos presentear com o que sentir vontade.
                Agradecemos sua contribuição nesse momento tão especial e nos
                vemos no grande dia!
              </p>
              <a
                href="https://lista.havan.com.br/Convidado/ItensListaPresente/640226"
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

export default MobileComponents;
