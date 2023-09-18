function TituloMorado({ contenido, clase }) {
  const clases = `titulo_morado titulo_blanco ${clase}`;
  return <h1 className={clases}>{contenido}</h1>;
}
export default TituloMorado;