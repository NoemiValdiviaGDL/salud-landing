import React from "react";
import { Phone, Award, ShieldCheck, Calendar } from "lucide-react";
import Perfil from "../../images/doctora-hero.jpg";
import "./Hero.css";

export const Hero = () => {
  const numeroTelefono = "523300000000";
  const mensaje = encodeURIComponent(
    "Hola, me gustaría agendar una consulta médica.",
  );
  const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;

  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-badge">
          <ShieldCheck size={18} color="#0284c7" />
          <span>
            Cédula Profesional: <strong>12345678</strong>
          </span>
        </div>

        <h1 className="hero-title">
          Cuidado Pediátrico Integral y de Confianza
        </h1>

        <p className="hero-subtitle">
          Dra. María Elena Gómez — Especialista en Pediatría y Desarrollo
          Infantil. Acompañando el crecimiento sano y feliz de tus hijos con
          atención cálida y personalizada.
        </p>

        <div className="hero-features">
          <div className="hero-feature-item">
            <Award size={20} color="#0284c7" />
            <span>10 años cuidando a los pequeños</span>
          </div>
          <div className="hero-feature-item">
            <Calendar size={20} color="#0284c7" />
            <span>Atención de urgencias y control</span>
          </div>
        </div>

        <div className="hero-cta">
          <a
            href={urlWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <Phone size={20} />
            Agendar Cita por WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-image-box">
        <img src={Perfil} alt="Foto Doctora" className="hero-doctor-image" />
      </div>
    </section>
  );
};
export default Hero;
