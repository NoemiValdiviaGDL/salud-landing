import React from "react";
import { Phone } from "lucide-react";
import "./phone-floating.css";

export const PhoneFloating = () => {
  const numeroTelefono = "3327825329";

  return (
    <a
      href={`tel:${numeroTelefono}`}
      className="phone-floating-btn"
      aria-label="Llamar al consultorio"
      title="Llamar directamente"
    >
      <Phone size={24} />
    </a>
  );
};

export default PhoneFloating;
