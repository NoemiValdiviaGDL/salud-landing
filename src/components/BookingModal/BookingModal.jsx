import React, { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  CheckCircle,
  User,
  Phone,
  Mail,
  FileText,
} from "lucide-react";
import "./BookingModal.css";

export const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState("form"); // 'form' | 'success'
  const [formData, setFormData] = useState({
    nombrePapa: "",
    nombrePaciente: "",
    telefono: "",
    correo: "",
    servicio: "Control de Niño Sano",
    fecha: "",
    hora: "10:00 AM",
    notas: "",
  });

  if (!isOpen) return null;

  const horariosDisponibles = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí es donde en producción se conecta con la API / Webhook (Make, n8n, Google Calendar)
    setStep("success");
  };

  const handleReset = () => {
    setStep("form");
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
              <h3>Agendar Cita Médica</h3>
              <p>
                Selecciona la fecha y hora disponible para tu consulta
                pediátrica.
              </p>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
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
                  <option value="Certificado Médico">
                    Certificado Médico Escolar
                  </option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Nombre del Padre / Madre</label>
                  <input
                    type="text"
                    name="nombrePapa"
                    placeholder="Ej. Sofia López"
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

              <div className="form-row">
                <div className="form-group">
                  <label>Selecciona la Fecha</label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Horario Preferido</label>
                  <select
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                  >
                    {horariosDisponibles.map((h, i) => (
                      <option key={i} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Sintomatología o Notas Adicionales (Opcional)</label>
                <textarea
                  name="notas"
                  rows="2"
                  placeholder="Ej. Presenta fiebre leve o requiere revisión de cartilla"
                  value={formData.notas}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="booking-submit-btn">
                <Calendar size={18} /> Confirmar Reserva de Cita
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <div className="success-icon-wrapper">
              <CheckCircle size={36} />
            </div>
            <h4>¡Solicitud de Cita Registrada!</h4>
            <p>
              Hemos registrado la cita para{" "}
              <strong>{formData.nombrePaciente}</strong> el día{" "}
              <strong>{formData.fecha || "seleccionado"}</strong> a las{" "}
              <strong>{formData.hora}</strong>.
            </p>
            <p className="text-muted" style={{ fontSize: "0.88rem" }}>
              Enviamos un correo de confirmación a {formData.correo}. Nuestro
              equipo te contactará brevemente para la validación final.
            </p>
            <button
              className="booking-submit-btn"
              onClick={handleReset}
              style={{ width: "100%" }}
            >
              Entendido / Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
