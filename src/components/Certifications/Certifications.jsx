import {
  Award,
  BookOpen,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import "./certifications.css";

export const Certifications = () => {
  const credenciales = [
    {
      id: 1,
      tipo: "Certificación Vigente",
      icon: <ShieldCheck size={24} />,
      titulo: "Consejo Mexicano de Certificación en Pediatría, A.C.",
      institucion: "CONAPEME • Recertificación Médica Activa",
      anio: "Vigente",
      descripcion:
        "Aval nacional que garantiza actualización continua, ética profesional y altos estándares en atención pediátrica.",
    },
    {
      id: 2,
      tipo: "Taller Clínico",
      icon: <Award size={24} />,
      titulo: "Reanimación Neonatal y Soporte Vital Pediátrico (PALS)",
      institucion: "American Heart Association (AHA)",
      anio: "2025",
      descripcion:
        "Entrenamiento práctico avanzado en manejo oportuno de urgencias respiratorias y atención inmediata al recién nacido.",
    },
    {
      id: 3,
      tipo: "Diplomado / Taller",
      icon: <BookOpen size={24} />,
      titulo: "Asesoría en Lactancia Materna y Alimentación Complementaria",
      institucion: "Instituto Nacional de Perinatología",
      anio: "2024",
      descripcion:
        "Abordaje integral basado en evidencia para acompañar a mamá y bebé en los primeros 1,000 días de vida.",
    },
    {
      id: 4,
      tipo: "Actualización Médica",
      icon: <Sparkles size={24} />,
      titulo: "Inmunizaciones y Esquemas de Vacunación Pediátrica",
      institucion: "Asociación Mexicana de Pediatría",
      anio: "2026",
      descripcion:
        "Protocolos actuales en prevención de enfermedades infecciosas, refuerzos y esquemas personalizados.",
    },
  ];

  return (
    <section id="certificaciones" className="certifications-section">
      <div className="certifications-container">
        <div className="certifications-header">
          <span className="certifications-tag">Respaldo Académico</span>
          <h2 className="certifications-title">
            Certificaciones, Talleres y Formación Continua
          </h2>
          <p className="certifications-subtitle">
            La medicina pediátrica evoluciona constantemente; me mantengo en
            actualización permanente para ofrecer diagnósticos seguros y basados
            en evidencia.
          </p>
        </div>

        <div className="certifications-grid">
          {credenciales.map((item) => (
            <article key={item.id} className="certification-card">
              <div className="certification-card-top">
                <div className="certification-icon-box">{item.icon}</div>
                <div className="certification-badges">
                  <span className="certification-type-badge">{item.tipo}</span>
                  <span className="certification-year-badge">{item.anio}</span>
                </div>
              </div>

              <div className="certification-body">
                <h3>{item.titulo}</h3>
                <p className="certification-institution">
                  <CheckCircle2 size={15} color="var(--color-primary)" />
                  <span>{item.institucion}</span>
                </p>
                <p className="certification-desc">{item.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
