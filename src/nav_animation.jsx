import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

 useEffect(() => {
  const sections = document.querySelectorAll(".seccion-menu");

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, 
        rootMargin: "-45% 0px -45% 0px", 
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