import React, { useState } from 'react';
import { FiGift, FiCheck, FiMapPin } from 'react-icons/fi';

import './MobileComponents.scss';
import ImagemFundo from '../ImagemFundo';
import Cabecalho from '../Cabecalho';
import { classNames } from '../../utils';

function MobileComponents() {
  const [abreItem, setAbreItem] = useState('');

  const presentes = (
    <div>
      <p>
        Querido convidado, seja bem-vindo a nossa lista de presentes! Pensamos
        em tudo com muito carinho para que você se sinta à vontade para nos
        presentear com o que sentir vontade. Agradecemos sua contribuição nesse
        momento tão especial e nos vemos no grande dia!
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
  );

  const presenca = (
    <div>
      <p>
        Querido convidado, Aqui você confirma a sua presença e de seus
        acompanhantes!
      </p>
      <div className="formulario">
        <div className="label">Seu nome:</div>
        <input
          className="pesquisa"
          type="text"
          placeholder="Digite para pesquisar..."
        />
        <div className="label">Confirme a presença:</div>
        <div className="area-confirmacao">
          <div className="item-confirmacao">
            <input type="checkbox" name="Fulano" id="Fulano" value="Fulano" />
            <label htmlFor="Fulano">Fulano</label>
          </div>
          <div className="item-confirmacao">
            <input
              type="checkbox"
              name="Cicrano"
              id="Cicrano"
              value="Cicrano"
            />
            <label htmlFor="Cicrano">Cicrano</label>
          </div>
          <div className="item-confirmacao">
            <input
              type="checkbox"
              name="Beltrano"
              id="Beltrano"
              value="Beltrano"
            />
            <label htmlFor="Beltrano">Beltrano</label>
          </div>
        </div>

        <button className="confirmacao">Confirmar</button>
      </div>
    </div>
  );

  const mapa = (
    <div>
      <p>A cerimônia será realizada na Igreja Cristã Maranata, 19h.</p>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.26831170145!2d-54.100163415890805!3d-24.572965026818416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f38045c12eefef%3A0x19fe7fed9e1d17e6!2sIgreja%20Crist%C3%A3%20Maranata!5e0!3m2!1spt-BR!2sbr!4v1673473976087!5m2!1spt-BR!2sbr"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa da Igreja"
        ></iframe>
      </div>

      <p className="sub">
        Rua Marechal Deodoro, 700 - Centro Marechal Cândido Rondon - PR
      </p>

      <div className="linha"></div>

      <p>A recepção será realizada no Taura Eventos, após a cerimônia</p>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.26831170145!2d-54.04809037277317!3d-24.545388454008474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f38032eb01dd43%3A0xf8dbc6c63f462fcd!2sTaura!5e0!3m2!1spt-BR!2sbr!4v1673474209833!5m2!1spt-BR!2sbr"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa do Taura"
        ></iframe>
      </div>

      <p className="sub">
        Av. Irio Jacob Welp, 2966 - Primavera Marechal Cândido Rondon - PR
      </p>
    </div>
  );

  const retornaConteudo = (item) => {
    if (item === 'presentes') {
      return presentes;
    } else if (item === 'presenca') {
      return presenca;
    } else if (item === 'guia') {
      return mapa;
    }
  };

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
