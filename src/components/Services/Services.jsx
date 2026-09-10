import { Baby, Syringe, Stethoscope, Apple } from "lucide-react";
import "./Services.css";

export const Services = () => {
  const listaServicios = [
    {
      id: 1,
      icon: <Baby size={26} color="#0284c7" />,
      title: "Control de Niño Sano",
      description:
        "Monitoreo continuo del crecimiento, peso, talla, desarrollo psicomotor y prevención oportuna en cada etapa infantil.",
    },
    {
      id: 2,
      icon: <Syringe size={26} color="#0284c7" />,
      title: "Esquema de Vacunación",
      description:
        "Aplicación y seguimiento de vacunas esenciales según la edad para garantizar una protección inmunológica completa.",
    },
    {
      id: 3,
      icon: <Stethoscope size={26} color="#0284c7" />,
      title: "Enfermedades Respiratorias",
      description:
        "Diagnóstico y tratamiento certero de bronquitis, asma, gripes, alergias y padecimientos infecciosos frecuentes.",
    },
    {
      id: 4,
      icon: <Apple size={26} color="#0284c7" />,
      title: "Nutrición y Alimentación",
      description:
        "Asesoría especializada en inicio de alimentación complementaria, prevención de anemia y hábitos saludables.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-tag">Servicios Especilizados</span>
        <h2 className="services-title">
          Atención Médica Pensada en los Más Pequeños
        </h2>
        <p className="services-subtitle">
          Ofrecemos un cuidado integral desde recién nacidos hasta la
          adolescencia con calidez y rigor científico.
        </p>
      </div>

      <div className="services-grid">
        {listaServicios.map((servicio) => (
          <div key={servicio.id} className="service-card">
            <div className="service-icon-box">{servicio.icon}</div>
            <h3 className="service-card-title">{servicio.title}</h3>
            <p className="service-card-description">{servicio.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
