import { NavURL, TituloBlanco } from "../components/nav";

export function Header() {
  return (
    <header>
      <TituloBlanco contenido="UserGitHub" />
      <nav>
        <NavURL contenido="Sobre Mi" />
        <NavURL contenido="Tecnologias" />
        <NavURL contenido="Proyectos" />
        <NavURL contenido='Contacto'/>
      </nav>
    </header>
  );
}
