import React, { useEffect, useState } from 'react';
import Desktop from '../pages/Desktop';
import Mobile from '../pages/Mobile';

function Comutador() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= 500 ? <Mobile /> : <Desktop />;
}

export default Comutador;
