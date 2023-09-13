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
  // Hacer una solicitud HTTP GET a tu API
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
