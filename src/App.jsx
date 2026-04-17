import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState } from 'react';
import React, { useEffect } from 'react';
import TiltCard  from './Tilted-SobreMi';
import ContactForm from './Form';
import Navbar from './nav_animation';

function App() {

  const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setOffsetY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
    <div style={{ width: '100%', height: '200vh',zIndex: -1 , position: 'fixed',transform: `translateY(${-offsetY * 0.3}px)`, pointerEvents: 'none' }}> {}
      <ShaderGradientCanvas style={{ position: 'absolute', top: 0 }}>
          <ShaderGradient
              animate="on"
              axesHelper="off"
              bgColor1="#000000"
              bgColor2="#000000"
              brightness={1.2}
              cAzimuthAngle={180}
              cDistance={3.6}
              cPolarAngle={90}
              cameraZoom={2}
              color1="#ED47E2"
              color2="#9b2fc9"
              color3="#CB5DF1"
              destination="onCanvas"
              embedMode="off"
              envPreset="city"
              format="gif"
              fov={45}
              frameRate={10}
              gizmoHelper="hide"
              grain="off"
              lightType="3d"
              pixelDensity={2.3}
              positionX={-1.2}
              positionY={0.5}
              positionZ={0}
              range="disabled"
              rangeEnd={40}
              rangeStart={0}
              reflection={0.1}
              rotationX={0}
              rotationY={10}
              rotationZ={50}
              shader="defaults"
              type="sphere"
              uAmplitude={0}
              uDensity={1.2}
              uFrequency={5.5}
              uSpeed={0.1}
              uStrength={1.8}
              uTime={0}
              wireframe={false}
          />
      </ShaderGradientCanvas>
    </div>
      <Navbar />
        <div className="CaraInicial seccion-menu" id="CaraInicial">
            <div className="Principal">
                <h1 id="TituloPrincipal">Samuel Garduño Gamboa</h1>
                <h2 id="Titulo2Principal">Ingeniero en Informática</h2>
                <p id="presentacion">HTML5  |  CSS  |  React  |  SQL</p>
            </div>
            <div id="Botones">
                <a id="Linkedin" href="https://www.linkedin.com/in/samuel-garduño-gamboa-a93a703a2/"><i class="fi fi-brands-linkedin"></i></a>
                <a id="Github" href='https://github.com/SamuelGarduno'><i class="fi fi-brands-github"></i></a>
                <a id="Correo" href="#Contacto"><i className="fi fi-sr-envelope"></i></a>
                <a id="CV">CV</a>
            </div>
        </div>
        <div className="SobreMi seccion-menu" id="SobreMi">
            <TiltCard />
            <aside>
                <section className="section1">
                    <h3>Máquinas con Sistemas Automatizados</h3>
                    <p>CECyT 9 "Juan de Dios Bátiz"</p>
                </section>
                <section  className="section2">
                    <h3>Ingeniería en Informática</h3>
                    <p>UPIICSA, IPN</p>
                </section>
                <section className="section3">
                    <h3>Prácticas profesionales como Data Engineer</h3>
                    <p>Secretaria de Medio Ambiente y Recursos Naturales (SEMARNAT)</p>
                </section>
            </aside>
        </div>
        <div className="Contacto seccion-menu" id='Contacto'>
            <div id="TituloContacto">
                <h1>Mandame un mensaje</h1>
                <div id="InfoContacto">
                    <div className='contacto-item'>
                        <i class="fi fi-brands-whatsapp"></i>
                        <p>+52 55 4925 0413</p>
                    </div>
                    <div className='contacto-item'>
                        <i class="fi fi-sr-envelope"></i>
                        <p>garduno.gamboa.samuel@gmail.com</p>
                    </div>
                    <div className='contacto-item'>
                        <i class="fi fi-sr-marker"></i><p>Benito Juarez, CDMX</p>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    </>  
  )
}

export default App;