import React, { useRef } from 'react';
import './styles-animated.css'

const TiltCard = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
    card.style.setProperty('--ty', `-10px`); 
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--ty', '0px');
  };

  return (
    <article
      ref={cardRef}
      className="tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h1>Perfil profesional</h1>
        <p className="perfil"><br></br>Soy egresado de Ingeniería en Informática del IPN (UPIICSA), con experiencia práctica en desarrollo Front-End y manejo de datos. Domino HTML, CSS y JavaScript, y tengo conocimientos en Python y C++. </p><p className="perfil">Durante mis prácticas en SEMARNAT trabajé como Data Engineer, donde automaticé procesos con Power Query y generé reportes analíticos con Excel, lo que me dio una visión más orientada a los datos. </p><p className='perfil'>Me considero una persona analítica, organizada y con buena capacidad para resolver problemas, que disfruta trabajar en equipo y aprender cosas nuevas. Cuento con inglés B2 certificado, listo para seguir creciendo profesionalmente.</p>
    </article>
  );
};

export default TiltCard;