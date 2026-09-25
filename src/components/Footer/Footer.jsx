import "./Footer.css";

export const Footer = ({ onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Dra. María Elena Ramos</h3>
          <p>
            Cuidado pediátrico integral enfocado en la salud, prevención y
            desarrollo armónico de tus hijos.
          </p>
        </div>
        <div className="footer-nav">
          <h4 className="footer-title">Navegación</h4>
          <ul className="footer-links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#sobre-mi">Sobre Mí</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#galeria">Consultorio</a>
            </li>
            <li>
              <a href="#testimonios">Opiniones</a>
            </li>
            <li>
              <a href="#contacto">Contacto y Ubicación</a>
            </li>
          </ul>
        </div>
        <div className="footer-hours">
          <h4 className="footer-title">Atención</h4>
          <p>Lun - Vie: 9:00 AM - 7:00 PM</p>
          <p>Sábados: 9:00 AM - 2:00 PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {currentYear} Dra. María Elena Ramos • Médico Cirujano Céd. Prof.
          12345678 • Pediatría Céd. Esp. 87654321
        </p>
        <p>
          <a
            href="#privacidad"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenPrivacy) onOpenPrivacy();
            }}
          >
            Aviso de Privacidad
          </a>{" "}
          | Sitio optimizado para consulta médica
        </p>
      </div>
    </footer>
  );
};

export default Footer;
