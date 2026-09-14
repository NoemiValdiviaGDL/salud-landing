import React from "react";
import { CheckCircle2, GraduationCap, Award, Users } from "lucide-react";
import DoctoraAbout from "../../images/doctora-about-me.avif";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <img
              src={DoctoraAbout}
              alt="Dra. María Elena Gómez"
              className="about-image"
            />

            <div className="about-floating-card">
              <div className="icon-box">
                <GraduationCap size={22} color="#0284c7" />
              </div>
              <div>
                <h4>Consejo Mexicano de Pediatria</h4>
                <p>Pediatra Certificada</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content-column">
          <span className="about-section-tag">Sobre Mí</span>

          <h2 className="about-title">
            Atención médica humana para la tranquilidad de tu familia
          </h2>

          <p className="about-philosophy">
            "Mi misión es brindar a cada niño una experiencia médica sin miedo,
            basada en el respeto, el afecto y la prevención oportuna."
          </p>

          <div className="about-stats-grid">
            <div className="about-stat-item">
              <h3>+10</h3>
              <p>Años Exp.</p>
            </div>
            <div className="about-stat-item">
              <h3>+5k</h3>
              <p>Pacientes</p>
            </div>
            <div className="about-stat-item">
              <h3>100%</h3>
              <p>Ética</p>
            </div>
          </div>

          <ul className="about-credentials">
            <li className="about-credential-item">
              <CheckCircle2 size={18} color="#0284c7" />
              <span>Médico Cirujano y Partero por la UdeG</span>
            </li>
            <li className="about-credential-item">
              <CheckCircle2 size={18} color="#0284c7" />
              <span>Alta Especialidad en Pediatría Médica</span>
            </li>
            <li className="about-credential-item">
              <CheckCircle2 size={18} color="#0284c7" />
              <span>Seguimiento de Crecimiento y Desarrollo</span>
            </li>
            <li className="about-credential-item">
              <CheckCircle2 size={18} color="#0284c7" />
              <span>Esquema Completo de Vacunación</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
