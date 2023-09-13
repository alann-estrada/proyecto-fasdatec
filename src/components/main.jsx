import { TituloMorado } from "./nav";

export function Buttons({ contenido, onclick }) {
  const funcion = onclick;
  return (
    <button className="boton" onClick={funcion}>
      {contenido}
    </button>
  );
}

export function Tecnologias({
  contenido_titulo,
  clase_titulo,
  clase_contenedor,
  lenguaje,
}) {
  fetch("http://localhost:3000/api/colors")
    .then((response) => response.json())
    .then((languageColors) => {
      const languageElements = document.querySelectorAll(".language");
      languageElements.forEach((element) => {
        const languageName = element.dataset.language;
        const color = languageColors[languageName];
        if (color) {
          element.style.color = color;
        }
      });
    })
    .catch((error) => {
      console.error("Error al cargar los datos desde la API:", error);
    });

  return (
    <div className={clase_contenedor}>
      <TituloMorado contenido={contenido_titulo} clase={clase_titulo} />
      <ul>
        <TecnologiasList lenguaje={lenguaje} />
      </ul>
    </div>
  );
}
export function TecnologiasList({ lenguaje }) {
  return (
    <>
      {lenguaje && lenguaje.length > 0 ? (
        lenguaje.map((lenguaje, index) => (
          <li key={index} class="language" data-language={lenguaje}>
            {lenguaje}
          </li>
        ))
      ) : (
        <p>No hay lenguajes disponibles</p>
      )}
    </>
  );
}

export function Cards({img, titulo, texto}) {
  return (
    <>
      {img && img.length > 0 ? (
        img.map((img, index) => (
          <div className="cards">
            <img key={index} src={img} alt="Imagen Card" />
            <TituloMorado contenido={titulo[index]} clase="tituloMorado_cards"/>
            <p>{texto[index]}</p>
          </div>
        ))
      ) : (
        <p>No hay cards disponibles</p>
      )}
    </>
  );
}

export function RedesS({ href, src, red_social }) {
  return (
    <>
      {href && href.length > 0 ? (
        href.map((href, index) => (
          <a
            className="redes_sociales"
            key={index}
            href={href}
            title={red_social[index]}
          >
            <img src={src[index]} alt={red_social} />
          </a>
        ))
      ) : (
        <p>No hay redes disponibles</p>
      )}
    </>
  );
}

export function Form({ label_nombre }) {
  return (
    <>
      {label_nombre && label_nombre.length > 0 ? (
        label_nombre.map((label_nombre, index) => (
          <>
            <label key={index} for="contacto">
              {label_nombre}:
            </label>
            <input
              type="text"
              id={label_nombre[index]}
              name={label_nombre}
            ></input>
          </>
        ))
      ) : (
        <p>No hay formularios disponibles</p>
      )}
    </>
  );
}
