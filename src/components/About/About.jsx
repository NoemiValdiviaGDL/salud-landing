import { CheckCircle2, GraduationCap } from "lucide-react";
import DoctoraAbout from "../../images/doctora-about-me.avif";
import "./about.css";

const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <img
              src={DoctoraAbout}
              alt="Dra. María Elena Ramos"
              className="about-image"
            />

            <div className="about-floating-card">
              <div className="icon-box">
                <GraduationCap size={22} color="var(--color-primary)" />
              </div>
              <div>
                <h4>Consejo Mexicano de Pediatría</h4>
                <strong>Cédula Profesional:</strong> 12345678 |{" "}
                <strong>Cédula Especialidad Pediátrica:</strong> 87654321
              </div>
            </div>
          </div>
        </div>

        <div className="about-content-column">
          <span className="about-section-tag">Sobre Mí</span>

          <h2 className="about-title">
            Atención médica humana y cercana para la tranquilidad de tu familia
          </h2>

          <p className="about-philosophy">
            "Mi misión es brindar a cada niño una experiencia médica libre de
            miedo y prisas, basada en el respeto, la paciencia y el afecto. Sé
            que detrás de cada consulta hay papás buscando respuestas claras y
            alguien en quien confiar plenamente la salud de quienes más aman."
          </p>

          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: "1.7",
              marginBottom: "1.6rem",
              fontSize: "0.98rem",
            }}
          >
            Elegí la pediatría porque creo profundamente en acompañar cada etapa
            del crecimiento desde el primer respiro hasta la adolescencia. En mi
            consultorio nos tomamos el tiempo necesario para escuchar tus
            inquietudes, explicar cada diagnóstico con palabras sencillas y
            lograr que tus hijos se sientan seguros, escuchados y felices en
            cada visita.
          </p>

          <div className="about-stats-grid">
            <div className="about-stat-item">
              <h3>+10</h3>
              <p>Años de Vocación</p>
            </div>
            <div className="about-stat-item">
              <h3>+5k</h3>
              <p>Familias Atendidas</p>
            </div>
            <div className="about-stat-item">
              <h3>100%</h3>
              <p>Trato Humano</p>
            </div>
          </div>

          <ul className="about-credentials">
            <li className="about-credential-item">
              <CheckCircle2 size={18} color="var(--color-primary)" />
              <span>Médico Cirujano y Partero egresada de la UdeG</span>
            </li>
            <li className="about-credential-item">
              <CheckCircle2 size={18} color="var(--color-primary)" />
              <span>
                Alta Especialidad en Pediatría Médica y Atención Integral
              </span>
            </li>
            <li className="about-credential-item">
              <CheckCircle2 size={18} color="var(--color-primary)" />
              <span>
                Acompañamiento personalizado en Crecimiento, Lactancia y
                Desarrollo
              </span>
            </li>
            <li className="about-credential-item">
              <CheckCircle2 size={18} color="var(--color-primary)" />
              <span>Prevención oportuna y Esquema Completo de Vacunación</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
