import { NavURL } from "../components/nav";
import TituloBlanco from "../components/tituloBlanco";


export function Header() {
  return (
    <header>
      <TituloBlanco contenido="UserGitHub" clase="header_titulo"/>
      <nav>
        <NavURL contenido="Sobre-Mi" />
        <NavURL contenido="Tecnologías" />
        <NavURL contenido="Proyectos" />
        <NavURL contenido='Contacto'/>
      </nav>
    </header>
  );
}
