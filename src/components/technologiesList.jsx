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
