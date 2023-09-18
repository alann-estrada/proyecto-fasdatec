function RedesS({ href, src, red_social }) {
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
export default RedesS;