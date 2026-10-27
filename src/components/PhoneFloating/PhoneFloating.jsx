import React from "react";
import { Phone } from "lucide-react";
import "./phone-floating.css";

export const PhoneFloating = () => {
  // Reemplaza con el teléfono real de atención para llamadas directas
  const numeroTelefono = "3300000000";

  return (
    <a
      href={`tel:${numeroTelefono}`}
      className="phone-floating-btn"
      aria-label="Llamar al consultorio"
      title="Llamar directamente"
    >
      <Phone size={26} />
    </a>
  );
};

export default PhoneFloating;
