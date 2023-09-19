import { useState } from "react";
import { NavURL } from "../components/nav";
import TituloBlanco from "../components/tituloBlanco";

export function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <header>
        <TituloBlanco contenido="UserGitHub" clase="header_titulo" />
        <input
          type="checkbox"
          id="menu-toggle"
          checked={menuVisible}
          onChange={toggleMenu}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <nav className={`nav-menu ${menuVisible ? "active" : ""}`}>
          <NavURL contenido="Sobre-Mi" />
          <NavURL contenido="Tecnologías" />
          <NavURL contenido="Proyectos" />
          <NavURL contenido="Contacto" />
        </nav>
      </header>
    </>
  );
}
