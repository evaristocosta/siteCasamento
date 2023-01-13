import MobilePresentes from './MobilePresentes';
import MobilePresenca from './MobilePresenca';
import MobileGuia from './MobileGuia';

export const retornaConteudo = (item) => {
  if (item === 'presentes') {
    return <MobilePresentes />;
  } else if (item === 'presenca') {
    return <MobilePresenca />;
  } else if (item === 'guia') {
    return <MobileGuia />;
  }
};
