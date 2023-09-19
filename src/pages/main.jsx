import Buttons from "../components/buttons";
import Cards from "../components/cards";
import Form from "../components/form";
import RedesS from "../components/redes";
import Tecnologias from "../components/technologies";

import TituloBlanco from "../components/tituloBlanco";
import { scrolling } from "../js/funciones";
import programador from "../img/programador1.svg";
import programador2 from "../img/programador2.png";
import TituloMorado from "../components/tituloMorado";

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
        <div className="tecnologias_contenido">
          <Tecnologias
            contenido_titulo="Algunas tecnologias:"
            clase_titulo="titulo_tecnologias"
            clase_contenedor="div_tecnologias"
            lenguaje={[
              "HTML",
              "CSS",
              "JavaScript",
              "SQL",
              "Java",
              "Python",
              "C++",
            ]}
          />
          <Tecnologias
            contenido_titulo="Junto algunas librerias como:"
            clase_titulo="titulo_tecnologias"
            clase_contenedor="div_tecnologias2"
            lenguaje={["React", "Bootstrap", "Entre otras"]}
          />
        </div>
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
        <div className="proyectos_cards">
          <Cards
            img={[
              "https://th.bing.com/th/id/OIP.IUX1piM20lwyd9BG892YaAHaHn?pid=ImgDet&rs=1",
              "https://th.bing.com/th/id/OIP.IUX1piM20lwyd9BG892YaAHaHn?pid=ImgDet&rs=1",
              "https://th.bing.com/th/id/OIP.IUX1piM20lwyd9BG892YaAHaHn?pid=ImgDet&rs=1",
            ]}
            titulo={["Proyecto 1", "Proyecto 2", "Proyecto 3"]}
            texto={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna nunc, viverra in odio non, eleifend euismod ipsum. Curabitur magna ex, ultrices vel arcu in, semper congue ligula. Fusce non tortor turpis. Etiam at finibus ipsum. Mauris vitae tincidunt lectus.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna nunc, viverra in odio non, eleifend euismod ipsum. Curabitur magna ex, ultrices vel arcu in, semper congue ligula. Fusce non tortor turpis. Etiam at finibus ipsum. Mauris vitae tincidunt lectus.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna nunc, viverra in odio non, eleifend euismod ipsum. Curabitur magna ex, ultrices vel arcu in, semper congue ligula. Fusce non tortor turpis. Etiam at finibus ipsum. Mauris vitae tincidunt lectus.",
            ]}
          />
        </div>
        {/* Se espera contenido complementario */}
      </section>
      <section id="Contacto">
        <aside className="contacto_aside">
          <div className="contacto_div">
              <TituloBlanco
                contenido="UserGitHub"
                clase="titulo_contacto_white"
              />
            <div className="contacto_div_links">
              <RedesS
                red_social={[
                  "Linkedin",
                  "Instagram",
                  "Facebook",
                  "Twitter",
                  "WhatsApp",
                  "GitHub",
                ]}
                href={[
                  "https://mx.linkedin.com/",
                  "https://instagram.com",
                  "https://facebook.com",
                  "https://x.com",
                  "https://whatsapp.com",
                  "https://github.com",
                ]}
                src={[
                  "https://th.bing.com/th/id/R.c56ac73b4815a49008272f97d158b4e1?rik=zSkBLTkR4Ke2Cg&pid=ImgRaw&r=0",
                  "https://th.bing.com/th/id/R.4af42c87858bf65a60f6632aaf366a2f?rik=UxA5%2fEyi7b1yeg&pid=ImgRaw&r=0",
                  "https://gfsconsultores.com.mx/images/facebook_black.png",
                  "https://www.drodd.com/images14/x10.png",
                  "https://imagensemoldes.com.br/wp-content/uploads/2020/04/WhatsApp-%C3%8Dcone-Preto-PNG.png",
                  "https://d1fdloi71mui9q.cloudfront.net/wEwO2OpySGSPNjM5biot_undefined",
                ]}
              />
            </div>
          </div>
          <div className="contenedor_img_contacto">
            <img
              className="imagen_contacto"
              src={programador2}
              alt="Programador"
            />
          </div>
        </aside>
        <aside className="contacto2">
          <TituloMorado contenido="Contacto" clase="titulo_complemento" />
          <form>
            <Form label_nombre={["Nombre", "Correo", "Asunto y descripción"]} />
            <Buttons contenido="Contactar" />
          </form>
        </aside>
      </section>
    </main>
  );
}
