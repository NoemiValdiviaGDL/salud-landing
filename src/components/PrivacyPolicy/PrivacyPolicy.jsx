import { ArrowLeft, ShieldCheck } from "lucide-react";
import "./PrivacyPolicy.css";

export const PrivacyPolicy = ({ onBack }) => {
  return (
    <section id="privacidad" className="privacy-section">
      <div className="privacy-container">
        <a href="#inicio" className="privacy-back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          Volver a la página principal
        </a>

        <div className="privacy-header">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <ShieldCheck size={28} color="#0284c7" />
            <h1 className="privacy-title">Aviso de Privacidad</h1>
          </div>
          <span className="privacy-date">
            Última actualización: Septiembre 2026
          </span>
        </div>

        <div className="privacy-content">
          <p>
            La <strong>Dra. María Elena Ramos</strong>, con domicilio en Av.
            Empresarios 150, Piso 5, Consultorio 502, Puerta de Hierro, Zapopan,
            Jal., es responsable del tratamiento y protección de sus datos
            personales y los de sus hijos o tutelados.
          </p>

          <h3>1. Datos Personales que Recopilamos</h3>
          <p>
            A través de nuestra página web o enlace de contacto por WhatsApp,
            podemos recopilar la siguiente información:
          </p>
          <ul>
            <li>Nombre completo del padre, madre o tutor.</li>
            <li>Número telefónico de contacto.</li>
            <li>Nombre y edad del paciente pediátrico.</li>
            <li>Correo electrónico (opcional).</li>
          </ul>

          <h3>2. Finalidad del Tratamiento de Datos</h3>
          <p>
            Los datos personales recolectados serán utilizados exclusivamente
            para:
          </p>
          <ul>
            <li>
              Agendamiento, confirmación y seguimiento de citas médicas
              pediátricas.
            </li>
            <li>
              Contacto directo para urgencias o aclaración de dudas sobre
              tratamientos.
            </li>
            <li>
              Elaboración y actualización del expediente clínico conforme a las
              normas oficiales de salud.
            </li>
          </ul>

          <h3>3. Protección y Confidencialidad</h3>
          <p>
            Nos comprometemos a no vender, alquilar ni compartir sus datos
            personales con terceros no autorizados. La información médica
            proporcionada está resguardada por el secreto profesional y médico.
          </p>

          <h3>4. Derechos ARCO</h3>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos, para qué
            los utilizamos y las condiciones del uso que les damos (Acceso).
            Asimismo, es su derecho solicitar la corrección de su información
            (Rectificación), que la eliminemos de nuestros registros
            (Cancelación) u oponerse al uso de los mismos (Oposición).
          </p>
          <p>
            Para ejercer cualquiera de sus derechos ARCO, puede ponerse en
            contacto directamente en nuestro consultorio o enviando un mensaje a
            nuestro WhatsApp oficial de atención.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
