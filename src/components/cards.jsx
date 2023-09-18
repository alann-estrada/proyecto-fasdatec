import TituloMorado from "./tituloMorado";


function Cards({ img, titulo, texto }) {
  return (
    <>
      {img && img.length > 0 ? (
        img.map((img, index) => (
          <div className="cards">
            <img key={index} src={img} alt="Imagen Card" />
            <TituloMorado
              contenido={titulo[index]}
              clase="tituloMorado_cards"
            />
            <p>{texto[index]}</p>
          </div>
        ))
      ) : (
        <p>No hay cards disponibles</p>
      )}
    </>
  );
}
export default Cards;
