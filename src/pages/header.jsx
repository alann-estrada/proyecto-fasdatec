import { NavURL, TituloBlanco } from "../components/nav";

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
