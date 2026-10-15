import { useState } from "react";
import { HeartPulse, Menu, X } from "lucide-react";
import "./Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-site">
      <div className="header-container">
        <a href="#inicio" className="header-logo-group" onClick={closeMenu}>
          <div className="header-logo-icon">
            <HeartPulse size={26} color="#0284c7" />
          </div>
          <div className="header-brand-text">
            <span className="header-brand-title">PEDIATRÍA</span>
            <span className="header-brand-subtitle">
              Dra. María Elena Ramos
            </span>
          </div>
        </a>
        <button
          className="header-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="header-nav-list">
            <li>
              <a href="#inicio" onClick={closeMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre-mi" onClick={closeMenu}>
                Sobre Mí
              </a>
            </li>
            <li>
              <a href="#servicios" onClick={closeMenu}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#galeria" onClick={closeMenu}>
                Consultorio
              </a>
            </li>
            <li>
              <a href="#testimonios" onClick={closeMenu}>
                Opiniones
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={closeMenu}>
                Contacto y Ubicación
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
