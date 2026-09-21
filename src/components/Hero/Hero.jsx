import React from "react";
import { Phone, Award, ShieldCheck, Calendar } from "lucide-react";
import Perfil from "../../images/doctora-hero.avif";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="inicio" className="hero-container">
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
            <span>
              Atención de urgencias y control del crecimiento y desarrollo
            </span>
          </div>
        </div>
      </div>

      <div className="hero-image-box">
        <img src={Perfil} alt="Foto Doctora" className="hero-doctor-image" />
      </div>
    </section>
  );
};
export default Hero;
