import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DotPulse } from '@uiball/loaders';
import './MobilePresenca.scss';

function MobilePresenca() {
  const [carregando, setCarregando] = useState(true);
  const [pesquisa, setPesquisa] = useState('');
  const [convidados, setConvidados] = useState([]);
  const [convidadosMarcados, setConvidadosMarcados] = useState([]);

  const [textoConfirmar, setTextoConfirmar] = useState({
    status: 0,
    texto: 'Selecione primeiro',
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + '/convidados')
      .then((response) => {
        const result = response.data;

        localStorage.setItem('convidados', JSON.stringify(result));
        setConvidados(result);

        setCarregando(false);
      })
      .catch((error) => {
        console.error(error);
        setConvidados(error);
      });
  }, []);

  const filtro = () => {
    const mestre = convidados.find((convidado) =>
      convidado.nome_limpo.startsWith(pesquisa.toLowerCase().replace(' ', ''))
    );

    if (mestre) {
      const correlatos = convidados.filter(
        (convidado) => convidado.id_correlato === mestre.id_correlato
      );

      return correlatos;
    } else {
      return [];
    }
  };

  const marcaConvidado = (id) => {
    let convidadosManipulados = convidadosMarcados;
    if (convidadosManipulados.includes(id)) {
      const indice = convidadosManipulados.indexOf(id);
      convidadosManipulados.splice(indice, 1);
      setConvidadosMarcados(convidadosManipulados);
    } else {
      convidadosManipulados = [id, ...convidadosManipulados];
      setConvidadosMarcados(convidadosManipulados);
    }

    if (convidadosManipulados.length === 0) {
      setTextoConfirmar({
        status: 0,
        texto: 'Selecione primeiro',
      });
    } else {
      setTextoConfirmar({
        status: 1,
        texto: 'Confirmar',
      });
    }
  };

  const atualizaConfirmacao = async () => {
    if (convidadosMarcados.length !== 0) {
      setTextoConfirmar({
        status: 2,
        texto: 'Enviando...',
      });

      const mestreConvidado = convidados.find((convidado) =>
        convidadosMarcados.includes(convidado.id)
      ).id_correlato;

      await axios
        .put(`${process.env.REACT_APP_URL}/convidado/${mestreConvidado}`, {
          ids: convidadosMarcados,
        })
        .then(() => {
          setInterval(() => {
            setTextoConfirmar({
              status: 1,
              texto: 'Confirmar',
            });
          }, 5000);
          setTextoConfirmar({
            status: 3,
            texto: 'Salvo com sucesso!',
          });
        })
        .catch((error) => {
          console.error(error);
          setTextoConfirmar({
            status: 0,
            texto: 'Ops! Deu algo errado...',
          });
        });
    }
  };

  return (
    <div>
      {/* <p>
        Querido convidado! Em breve você poderá confirmar a sua presença. Te
        avisaremos quando estiver disponível!
      </p> */}

      <p>
        Querido convidado, aqui você confirma a sua presença e de seus
        acompanhantes!
      </p>
      {carregando ? (
        <div className="carregando">
          <DotPulse size={40} speed={1.5} color="#b84900" />
        </div>
      ) : (
        <div className="formulario">
          <div className="label">Seu nome:</div>
          <input
            className="pesquisa"
            type="text"
            placeholder="Digite para pesquisar..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
          <div className="label">Confirme a presença:</div>
          <div className="area-confirmacao">
            {pesquisa.length >= 3 ? (
              <>
                {filtro().length > 0 ? (
                  filtro().map((convidado) => (
                    <div key={convidado.id} className="item-confirmacao">
                      <input
                        type="checkbox"
                        name={convidado.id}
                        id={convidado.id}
                        value={convidado.id}
                        onChange={() => marcaConvidado(convidado.id)}
                      />
                      <label htmlFor={convidado.id}>{convidado.nome}</label>
                    </div>
                  ))
                ) : (
                  <div className="minimo-letras">
                    Nenhum convidado encontrado...
                  </div>
                )}
              </>
            ) : (
              <div className="minimo-letras">Digite pelo menos 3 letras...</div>
            )}
          </div>

          <button
            className={`confirmacao confirmacao-${textoConfirmar.status}`}
            onClick={() => atualizaConfirmacao()}
          >
            {textoConfirmar.texto}
          </button>
        </div>
      )}

      <div className="observacao sub">
        Obs.: Caso não encontre quem estava procurando, fale conosco!
      </div>
    </div>
  );
}

export default MobilePresenca;
