import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

 useEffect(() => {
  const sections = document.querySelectorAll(".seccion-menu");

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // En móviles y desktop, si la sección entra en el área
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // Observa el viewport global
        rootMargin: "-45% 0px -45% 0px", // Una franja del 10% en el centro de la pantalla
        threshold: 0 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li className={activeSection === "CaraInicial" ? "active" : ""}>
          <a className="boton_menu" href="#CaraInicial">Inicio</a>
        </li>
        <li className={activeSection === "SobreMi" ? "active" : ""}>
          <a className="boton_menu" href="#SobreMi">Perfil Profesional</a>
        </li>
        <li className={activeSection === "Contacto" ? "active" : ""}>
          <a className="boton_menu" href="#Contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

  export default Navbar;