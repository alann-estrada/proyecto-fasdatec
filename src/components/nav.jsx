import {scrolling} from "../js/funciones";

export function NavURL({contenido}) {
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a className="nav_url" onClick={() => scrolling(contenido)}>{contenido}</a>;
}