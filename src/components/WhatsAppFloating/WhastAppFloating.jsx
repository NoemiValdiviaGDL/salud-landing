import React from "react";
import { MessageCircle } from "lucide-react";
import "./whats-app-floating.css";

export const WhatsAppFloating = () => {
  const numeroTelefono = "3327825329";
  const mensajePredeterminado = encodeURIComponent(
    "Hola Dra. María Elena, vi su página web y me gustaría consultar la disponibilidad para agendar una cita.",
  );

  const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${mensajePredeterminado}`;

  return (
    <a
      href={urlWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      aria-label="Contactar por WhatsApp"
      title="Agendar cita por WhatsApp"
    >
      <MessageCircle size={30} color="#ffffff" />
    </a>
  );
};

export default WhatsAppFloating;
