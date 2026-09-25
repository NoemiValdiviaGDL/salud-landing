import React from "react";
import {
  MessageCircle,
  MapPin,
  ShieldCheck,
  Star,
  Users,
  CalendarCheck,
} from "lucide-react";

import "./Hero.css";
import PicHero from "../../images/doctora-hero.avif";

export const Hero = () => {
  const numeroTelefono = "523300000000"; // Reemplazar con el número real
  const mensajeWhatsApp = encodeURIComponent(
    "Hola Dra. María Elena, me gustaría consultar la disponibilidad de horarios para agendar una cita pediátrica.",
  );
  const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${mensajeWhatsApp}`;

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        {/* Contenido Principal (Copywriting de Ventas) */}
        <div className="hero-content">
          {/* Badge de Disponibilidad e Identidad */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Citas Disponibles esta Semana • Zapopan
          </div>

          {/* Titular Promesa de Valor */}
          <h1>
            Cuidado Pediátrico Especializado <span>Sin Esperas ni Prisas</span>
          </h1>

          {/* Subtítulo enfocado en tranquilidad para los papás */}
          <p className="hero-description">
            Atención médica integral, diagnósticos precisos y la calidez que tus
            hijos merecen. Acompañamos su crecimiento con la tranquilidad que
            buscas como mamá o papá.
          </p>

          {/* Botones de Llamada a la Acción (CTAs) */}
          <div className="hero-actions">
            <a
              href={urlWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-whatsapp"
            >
              <MessageCircle size={22} fill="#ffffff" color="#25d366" />
              Agendar Cita por WhatsApp
            </a>

            <a href="#contacto" className="btn-secondary-location">
              <MapPin size={18} color="#0284c7" />
              Ver Ubicación
            </a>
          </div>

          {/* Gatillos de Confianza Inmediata (Trust Badges) */}
          <div className="hero-trust-grid">
            <div className="trust-item">
              <span className="trust-number">100%</span>
              <span className="trust-label">Pacientes Satisfechos</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">+1,500</span>
              <span className="trust-label">Niños Atendidos</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">4.8 ★</span>
              <span className="trust-label">En Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Fotografía o Ilustración Profesional */}
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src={PicHero}
              alt="Dra. María Elena Ramos - Pediatra en Zapopan"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
