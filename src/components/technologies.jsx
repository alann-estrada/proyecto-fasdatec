import { TecnologiasList } from "./technologiesList";
import TituloMorado from "./tituloMorado";


function Tecnologias({
  contenido_titulo,
  clase_titulo,
  clase_contenedor,
  lenguaje,
}) {
  fetch("https://api-colors-4t6q-dev.fl0.io/api/colors")
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
export default Tecnologias;