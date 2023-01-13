import React from 'react';

function MobileGuia() {
  return (
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
}

export default MobileGuia;
