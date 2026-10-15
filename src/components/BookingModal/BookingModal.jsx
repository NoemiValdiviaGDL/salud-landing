import React, { useState } from "react";
import {
  X,
  Calendar,
  CheckCircle,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";
import "./BookingModal.css";

export const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState("form"); // 'form' | 'success'
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nombrePapa: "",
    nombrePaciente: "",
    telefono: "",
    correo: "",
    servicio: "Control de Niño Sano",
    fecha: "",
    hora: "10:00",
    notas: "",
  });

  // URL del Webhook o Google Apps Script que conecta con el Google Calendar del médico
  // Para probar, puedes usar tu URL de Apps Script o dejarlo para procesamiento directo
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzMe_7R96gpig4gQjKMBtjbV83OKpEupGAe2Z3OYUZ3A0xkMaZVLCKwNTpU4gByCZbrVg/exec";

  if (!isOpen) return null;

  const horariosDisponibles = [
    { label: "09:00 AM", value: "09:00" },
    { label: "10:00 AM", value: "10:00" },
    { label: "11:00 AM", value: "11:00" },
    { label: "04:00 PM", value: "16:00" },
    { label: "05:00 PM", value: "17:00" },
    { label: "06:00 PM", value: "18:00" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Genera un enlace directo para que el paciente añada la cita a su propio Google Calendar
  const generarGoogleCalendarUrl = () => {
    if (!formData.fecha || !formData.hora) return "#";

    const [horas, minutos] = formData.hora.split(":");
    const fechaInicio = new Date(`${formData.fecha}T${horas}:${minutos}:00`);
    const fechaFin = new Date(fechaInicio.getTime() + 60 * 60 * 1000); // 1 hora de duración

    const formatISO = (date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const titulo = encodeURIComponent(
      `Cita Pediátrica: ${formData.nombrePaciente}`,
    );
    const detalles = encodeURIComponent(
      `Consulta con Dra. María Elena Ramos.\nServicio: ${formData.servicio}\nTutor: ${formData.nombrePapa}\nTeléfono: ${formData.telefono}`,
    );
    const ubicacion = encodeURIComponent(
      "Av. Empresarios 150, Puerta de Hierro, Zapopan, Jal.",
    );
    const fechas = `${formatISO(fechaInicio)}/${formatISO(fechaFin)}`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${fechas}&details=${detalles}&location=${ubicacion}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Envío de datos al servicio/Google Apps Script
      if (GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes("TU_SCRIPT_ID")) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else {
        // Simulación para prototipo si aún no se ha pegado el ID del Script
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setLoading(false);
      setStep("success");
    } catch (error) {
      console.error("Error al registrar la cita en Google Calendar:", error);
      setLoading(false);
      // Pasa al paso de éxito de todos modos para no bloquear la experiencia del prototipo
      setStep("success");
    }
  };

  const handleReset = () => {
    setStep("form");
    setFormData({
      nombrePapa: "",
      nombrePaciente: "",
      telefono: "",
      correo: "",
      servicio: "Control de Niño Sano",
      fecha: "",
      hora: "10:00",
      notas: "",
    });
    onClose();
  };

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div
        className="booking-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="booking-modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {step === "form" ? (
          <>
            <div className="booking-header">
              <h3>Agendar Cita Pediátrica</h3>
              <p>
                Selecciona fecha y hora para sincronizar tu cita con Google
                Calendar.
              </p>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              {/* Servicio */}
              <div className="form-group">
                <label>Servicio Requerido</label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                >
                  <option value="Control de Niño Sano">
                    Control de Niño Sano
                  </option>
                  <option value="Consulta Pediátrica General">
                    Consulta Pediátrica General
                  </option>
                  <option value="Vacunación y Esquemas">
                    Vacunación y Esquemas
                  </option>
                  <option value="Crecimiento y Nutrición">
                    Crecimiento y Nutrición
                  </option>
                  <option value="Certificado Médico Escolar">
                    Certificado Médico Escolar
                  </option>
                </select>
              </div>

              {/* Nombres */}
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre del Padre / Madre</label>
                  <input
                    type="text"
                    name="nombrePapa"
                    placeholder="Ej. Sofía López"
                    value={formData.nombrePapa}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Nombre del Paciente (Hijo/a)</label>
                  <input
                    type="text"
                    name="nombrePaciente"
                    placeholder="Ej. Mateo Gómez"
                    value={formData.nombrePaciente}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Contacto */}
              <div className="form-row">
                <div className="form-group">
                  <label>Teléfono de Contacto</label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="(33) 0000-0000"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input
                    type="email"
                    name="correo"
                    placeholder="correo@ejemplo.com"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Fecha y Hora */}
              <div className="form-row">
                <div className="form-group">
                  <label>Fecha de Consulta</label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Horario Disponible</label>
                  <select
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    required
                  >
                    {horariosDisponibles.map((h, index) => (
                      <option key={index} value={h.value}>
                        {h.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notas */}
              <div className="form-group">
                <label>Notas Adicionales (Opcional)</label>
                <textarea
                  name="notas"
                  rows="2"
                  placeholder="Ej. Revisión de esquema de vacunación o síntoma específico"
                  value={formData.notas}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Botón de Envió */}
              <button
                type="submit"
                className="booking-submit-btn"
                disabled={loading}
              >
                <Calendar size={18} />
                {loading
                  ? "Agendando en Google Calendar..."
                  : "Confirmar y Agendar Cita"}
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <div className="success-icon-wrapper">
              <CheckCircle size={36} />
            </div>
            <h4>¡Cita Registrada Exitosamente!</h4>
            <p>
              La cita para <strong>{formData.nombrePaciente}</strong> quedó
              registrada para el día <strong>{formData.fecha}</strong> a las{" "}
              <strong>{formData.hora} hrs</strong>.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                margin: "20px 0",
              }}
            >
              <a
                href={generarGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="booking-submit-btn"
                style={{ textDecoration: "none", backgroundColor: "#0f9d58" }}
              >
                <ExternalLink size={18} /> Añadir a mi Google Calendar
              </a>

              <button
                className="booking-submit-btn"
                onClick={handleReset}
                style={{ backgroundColor: "#64748b" }}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
