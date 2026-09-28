import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import "./FAQ.css";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const numeroTelefono = "3327824329";
  const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
    "Hola Dra. María Elena, tengo una consulta sobre las citas y disponibilidad.",
  )}`;

  const preguntas = [
    {
      pregunta: "¿Qué métodos de pago aceptan en el consultorio?",
      respuesta:
        "Aceptamos pago en efectivo, transferencias bancarias y todas las tarjetas de crédito o débito (Visa y Mastercard). Además, emitimos factura médica deducible de impuestos.",
    },
    {
      pregunta: "¿Cómo funciona el estacionamiento en el consultorio?",
      respuesta:
        "El edificio cuenta con estacionamiento privado con servicio de Valet Parking para tu comodidad, asegurando un acceso rápido y seguro para ti y tus hijos.",
    },
    {
      pregunta: "¿Qué debo llevar a la primera consulta de mi hijo/a?",
      respuesta:
        "Te recomendamos llevar su cartilla de vacunación actualizada, cualquier estudio o receta previa si cuenta con un padecimiento en curso, y su juguete preferido para que se sienta cómodo.",
    },
    {
      pregunta: "¿Atienden urgencias médicas o dudas fuera de horario?",
      respuesta:
        "Sí, para nuestros pacientes frecuentes contamos con un canal de atención telefónica y WhatsApp prioritario para orientarte en caso de fiebre, síntomas agudos o emergencias.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-tag">Resuelve tus dudas</span>
          <h2>Preguntas Frecuentes</h2>
          <p>Todo lo que necesitas saber antes de tu visita al consultorio.</p>
        </div>

        <div className="faq-list">
          {preguntas.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.pregunta}</span>
                  <ChevronDown className="faq-icon" size={20} />
                </button>

                {isOpen && <div className="faq-answer">{item.respuesta}</div>}
              </div>
            );
          })}
        </div>

        <div className="faq-cta-box">
          <h3>¿Tienes otra pregunta específica?</h3>
          <p>Escríbenos directamente y te responderemos a la brevedad.</p>
          <a
            href={urlWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="faq-cta-btn"
          >
            <MessageCircle size={20} fill="#ffffff" color="#25d366" />
            Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
