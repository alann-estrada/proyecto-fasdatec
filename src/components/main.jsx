export function Buttons({ contenido, onclick }) {
  const funcion = onclick;
  return (
    <button className="boton" onClick={funcion}>
      {contenido}
    </button>
  );
}


