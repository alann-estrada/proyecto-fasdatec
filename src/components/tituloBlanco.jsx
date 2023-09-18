function TituloBlanco({ contenido, clase }) {
  const clases = `titulo_blanco ${clase}`;
  return <h1 className={clases}>{contenido}</h1>;
}
export default TituloBlanco;
