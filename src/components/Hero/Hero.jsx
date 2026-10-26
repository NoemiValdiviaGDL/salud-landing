import { useState } from "react";
import {
  MessageCircle,
  MapPin,
  ShieldCheck,
  Star,
  Users,
  Calendar,
} from "lucide-react";

import "./Hero/Hero.css";
import PicHero from "../../images/doctora-hero.avif";
import "./Hero.css";
import BookingModal from "../BookingModal/BookingModal";

export const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingOpen(true);
  };

  const numeroTelefono = "3327825329";
  const mensajeWhatsApp = encodeURIComponent(
    "Hola Dra. María Elena, me gustaría consultar la disponibilidad de horarios para agendar una cita pediátrica.",
  );
  const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${mensajeWhatsApp}`;

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Citas Disponibles esta Semana • Zapopan
          </div>
          <h1>
            Cuidado Pediátrico Especializado <span>Sin Esperas ni Prisas</span>
          </h1>
          <p className="hero-description">
            Atención médica integral, diagnósticos precisos y la calidez que tus
            hijos merecen. Acompañamos su crecimiento con la tranquilidad que
            buscas como mamá o papá.
          </p>

          <div className="hero-actions">
            <a href="#contacto" className="btn-secondary-location">
              <MapPin size={18} color="#0284c7" />
              Ver Ubicación
            </a>
          </div>
          <button className="hero-btn-booking" onClick={handleBookingClick}>
            <Calendar size={18} />
            Agendar Cita
          </button>

          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
          />

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
