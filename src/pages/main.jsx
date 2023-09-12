import { Buttons } from "../components/main";
import { TituloBlanco, TituloMorado } from "../components/nav";
import { scrolling } from "../js/funciones";
import programador from "../img/programador1.svg";
import programador2 from "../img/programador2.png"

export function Main() {
  return (
    <main>
      <section id="Sobre-Mi">
        <div className="div_contenido">
          <TituloBlanco contenido="Sobre-Mi" clase="titulo_sobre_mi" />
          <p>
            Apasionado desarrollador de videojuegos y programación con muchos
            enfoques. Comprometido con la innovación y soluciones efectivas para
            desafíos. Impulsado por contribuir al futuro tecnológico con cada
            línea de código.
          </p>
          <Buttons contenido="Contacto" onclick={() => scrolling("Contacto")} />
        </div>
        <div className="div_imagen">
          <img src={programador} alt="Programador" />
        </div>
      </section>
      <section id="Tecnologías" className="Contenedor_Tema">
        <TituloMorado contenido="Tecnologías" clase="titulo_complemento" />
        <div className="contenedor_tema">
          <p>
            Bienvenidos al apartado de tecnologías en mi mundo digital. Aquí
            podrás explorar las herramientas y tecnologías que forman la base de
            mis proyectos y pasiones. Desde la creación de sitios web dinámicos
            hasta la implementación de funcionalidades interactivas, estas
            tecnologías son las piezas fundamentales que dan vida a mis ideas.
          </p>
          <img
            src="https://media0.giphy.com/media/WFZvB7VIXBgiz3oDXE/giphy.gif"
            alt=""
          />
        </div>
        {/* Se espera contenido complementario */}
      </section>
      <section id="Proyectos" className="Contenedor_Tema">
        <TituloMorado contenido="Proyectos" clase="titulo_complemento" />
        <div className="contenedor_tema">
          <img
            className="img_proyectos"
            src="https://userscontent2.emaze.com/images/a4f075c1-ae43-4cad-99c0-82540c64af73/ccfbc78c-31bc-42a2-941c-1450cd28b0de.gif"
            alt=""
          />
          <p>
            Bienvenidos al apartado de tecnologías en mi mundo digital. Aquí
            podrás explorar las herramientas y tecnologías que forman la base de
            mis proyectos y pasiones. Desde la creación de sitios web dinámicos
            hasta la implementación de funcionalidades interactivas, estas
            tecnologías son las piezas fundamentales que dan vida a mis ideas.
          </p>
        </div>
        {/* Se espera contenido complementario */}
      </section>
      <section id="Contacto">
        <aside className="contacto">
          <div className="contacto_div">
            <TituloBlanco
              contenido="UserGitHub"
              clase="titulo_contacto_white"
            />
            {/* Se espera contenido complementario aqui */}
          </div>
          <img
            className="imagen contacto"
            src={programador2}
            alt="Programador"
          />
        </aside>
        <aside className="contacto2">
          <TituloMorado contenido="Contacto" clase="" />
          {/*  Se espera contenido complementario*/}
          <Buttons contenido="Contactar" />
        </aside>
      </section>
    </main>
  );
}
