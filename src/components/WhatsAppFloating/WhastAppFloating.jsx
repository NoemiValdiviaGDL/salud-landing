import React from "react";
import { MessageCircle } from "lucide-react";
import "./WhatsAppFloating.css";

export const WhatsAppFloating = () => {
  const numeroTelefono = "3327825329";
  const mensajePredeterminado = encodeURIComponent(
    "Hola Dra. Maria Elena, vi su página web y me gustaria consultar la disponibilidad para agendar una cita",
  );

  const urlWhastsapp = `https://wa.me/${numeroTelefono}?text=${mensajePredeterminado}`;
  return (
    <a
      href={urlWhastsapp}
      targent="_blank"
      rel="nooper noreferrer"
      className="whatsapp-floating-btn"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} fill="#ffffff" color="#25d366" />
    </a>
  );
};
export default WhatsAppFloating;
