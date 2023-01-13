import React, { useState } from 'react';
import { FiGift, FiCheck, FiMapPin } from 'react-icons/fi';

import './MobileComponents.scss';
import ImagemFundo from '../ImagemFundo';
import Cabecalho from '../Cabecalho';
import { classNames } from '../../utils';
import { retornaConteudo } from './MobileComponents.utils';

function MobileComponents() {
  const [abreItem, setAbreItem] = useState('');

  return (
    <div className="mobile">
      <ImagemFundo />
      <div className="fundo">
        <div className="conteudo">
          <Cabecalho />

          <div className="itens">
            <div
              className={classNames({
                topo: abreItem === 'presentes',
                'item presentes': true,
                'bolas-topo primeiro-esquerda': abreItem === 'presenca',
                'bolas-topo segundo-esquerda': abreItem === 'guia',
              })}
            >
              <div
                className="bola"
                onClick={() =>
                  abreItem === 'presentes'
                    ? setAbreItem('')
                    : setAbreItem('presentes')
                }
              >
                <FiGift className="icone" />
              </div>
              {['presentes', ''].includes(abreItem) && (
                <div className="texto">Lista de presentes</div>
              )}
            </div>

            <div
              className={classNames({
                topo: abreItem === 'presenca',
                'item presenca': true,
                'bolas-topo primeiro-direita': abreItem === 'presentes',
                'bolas-topo primeiro-esquerda': abreItem === 'guia',
              })}
            >
              <div
                className="bola"
                onClick={() =>
                  abreItem === 'presenca'
                    ? setAbreItem('')
                    : setAbreItem('presenca')
                }
              >
                <FiCheck className="icone" />
              </div>
              {['presenca', ''].includes(abreItem) && (
                <div className="texto">Confirmação de presença</div>
              )}
            </div>

            <div
              className={classNames({
                topo: abreItem === 'guia',
                'item guia': true,
                'bolas-topo segundo-direita': abreItem === 'presentes',
                'bolas-topo primeiro-direita': abreItem === 'presenca',
              })}
            >
              <div
                className="bola"
                onClick={() =>
                  abreItem === 'guia' ? setAbreItem('') : setAbreItem('guia')
                }
              >
                <FiMapPin className="icone" />
              </div>
              {['guia', ''].includes(abreItem) && (
                <div className="texto">Guia do evento</div>
              )}
            </div>
          </div>

          <div
            className={classNames({
              quadro: true,
              'quadro-escondido': abreItem === '',
            })}
          >
            <div className="quadro-conteudo">{retornaConteudo(abreItem)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileComponents;
