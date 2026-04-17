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
        <p class="perfil"><br></br>Recién egresado de la carrera de Ingeniería en Informática en el Instituto Politécnico Nacional (UPIICSA), con formación solida en programación, redes, gestión de bases de datos y desarrollo Front-End.</p><p class="perfil">Me caracterizo por ser una persona responsable, analítica, orientada a resultados, multitarea, con muchas ganas de seguir aprendiendo y capaz de trabajar en equipo. Busco una oportunidad para aplicar mis habilidades técnicas en el área de ingeniería y continuar desarrollándome profesionalmente.</p>
    </article>
  );
};

export default TiltCard;