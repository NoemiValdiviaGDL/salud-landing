import { MapPin, Clock, Phone, MessageCircle, Mail } from "lucide-react";
import "./Contact.css";

export const Contact = () => {
  const numeroTelefono = "3327825329";
  const mensaje = encodeURIComponent(
    "Hola Dra. María Elena, vi su ubicación en la página web y me gustaría agendar una consulta.",
  );
  const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-header">
        <span className="contact-tag">Ubicación y Citas</span>
        <h2 className="contact-title">Visítanos en Nuestro Consultorio</h2>
        <p className="contact-subtitle">
          Estamos ubicados en una zona accesible con estacionamiento y
          facilidades para tu familia.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info-column">
          <div className="contact-info-list">
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <MapPin size={24} color="#0284c7" />
              </div>
              <div className="contact-info-details">
                <h4>Dirección</h4>
                <p>Av. Empresarios 150, Piso 5, Consultorio 502</p>
                <p>Puerta de Hierro, Zapopan, Jal.</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Clock size={24} color="#0284c7" />
              </div>
              <div className="contact-info-details">
                <h4>Horarios de Atención</h4>
                <p>Lunes a Viernes: 9:00 AM – 7:00 PM</p>
                <p>Sábados: 9:00 AM – 2:00 PM</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Mail size={24} color="#0284c7" />
              </div>
              <div className="contact-info-details">
                <h4>Email</h4>
                <p>Dra_MariaRamos@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Phone size={24} color="#0284c7" />
              </div>
              <div className="contact-info-details">
                <h4>Teléfonos de Contacto</h4>
                <p>Citas: (33) 3000-0000</p>
                <p>Urgencias: (33) 3000-0001</p>
              </div>
            </div>
          </div>
          <div className="contact-whatsapp-wrapper">
            <a
              href={urlWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-contact"
            >
              <MessageCircle size={22} />
              Enviar mensaje directo por WhatsApp
            </a>
          </div>
        </div>
        <div className="contact-map-column">
          <div className="contact-map-wrapper">
            <iframe
              title="Ubicación del consultorio pediátrico"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.164871922572!2d-103.41432102398418!3d20.703554098256377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428aecc49c5950d%3A0x6b4f74f76df56ec7!2sPuerta%20de%20Hierro%2C%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
              className="contact-map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
