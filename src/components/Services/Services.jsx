import React from "react";
import {
  Baby,
  Stethoscope,
  Syringe,
  HeartPulse,
  Activity,
  ArrowRight,
} from "lucide-react";
import "./Services.css";

export const Services = () => {
  const numeroTelefono = "523300000000"; // Número del consultorio

  const listaServicios = [
    {
      id: 1,
      icon: <Baby size={28} />,
      title: "Control de Niño Sano",
      description:
        "Monitoreo mensual y semestral del crecimiento, peso, talla, nutrición y desarrollo psicomotor desde recién nacidos.",
      whatsappMsg:
        "Hola Dra. María Elena, me gustaría agendar una cita para Control de Niño Sano.",
    },
    {
      id: 2,
      icon: <Stethoscope size={28} />,
      title: "Consulta Pediátrica General",
      description:
        "Atención cálida y oportuna para padecimientos comunes: fiebre, infecciones respiratorias, alergias y malestares digestivos.",
      whatsappMsg:
        "Hola Dra. María Elena, necesito una consulta pediátrica para revisar a mi hijo/a.",
    },
    {
      id: 3,
      icon: <Syringe size={28} />,
      title: "Vacunación y Esquemas",
      description:
        "Revisión, orientación y aplicación de vacunas esenciales según la edad para mantener a tus hijos protegidos.",
      whatsappMsg:
        "Hola Dra. María Elena, quisiera consultar información sobre el esquema de vacunación.",
    },
    {
      id: 4,
      icon: <HeartPulse size={28} />,
      title: "Crecimiento y Nutrición",
      description:
        "Evaluación del estado nutricional, prevención de anemia, asesoría en lactancia materna e alimentación complementaria.",
      whatsappMsg:
        "Hola Dra. María Elena, me interesa una consulta enfocada en nutrición y desarrollo.",
    },
    {
      id: 5,
      icon: <Activity size={28} />,
      title: "Certificados Médicos Escolares",
      description:
        "Examen físico completo y expedición de certificados médicos oficiales para ingreso escolar o actividades deportivas.",
      whatsappMsg:
        "Hola Dra. María Elena, quisiera solicitar cita para un certificado médico escolar.",
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        {/* Encabezado enfocado en valor */}
        <div className="services-header">
          <span className="services-tag">Cuidado Especializado</span>
          <h2>Atención Pediátrica Integral para Cada Etapa</h2>
          <p>
            Servicios diseñados para cuidar la salud de tus hijos con paciencia,
            empatía y el respaldo médico que necesitas.
          </p>
        </div>

        {/* Grilla de Servicios con CTAs directos */}
        <div className="services-grid">
          {listaServicios.map((servicio) => {
            const urlWhatsappServicio = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(servicio.whatsappMsg)}`;

            return (
              <div key={servicio.id} className="service-card">
                <div>
                  <div className="service-icon-wrapper">{servicio.icon}</div>
                  <h3>{servicio.title}</h3>
                  <p>{servicio.description}</p>
                </div>

                <a
                  href={urlWhatsappServicio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-cta-link"
                >
                  Agendar este servicio <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
