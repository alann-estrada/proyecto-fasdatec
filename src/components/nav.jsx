import {scrolling} from "../js/funciones";

export function NavURL({contenido}) {
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a className="nav_url" onClick={() => scrolling(contenido)}>{contenido}</a>;
}

export function TituloBlanco({contenido, clase}){
  const clases = `titulo_blanco ${clase}`; 
  return <h1 className={clases}>{contenido}</h1>
}

export function TituloMorado({ contenido, clase }) {
  const clases = `titulo_morado titulo_blanco ${clase}`;
  return <h1 className={clases}>{contenido}</h1>;
}