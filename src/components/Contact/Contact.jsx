import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Mail,
  ExternalLink,
} from "lucide-react";
import "./contact.css";

export const Contact = () => {
  const [shouldRenderMap, setShouldRenderMap] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapSectionRef = useRef(null);

  const numeroTelefono = "3327825329";
  const mensaje = encodeURIComponent(
    "Hola Dra. María Elena, vi su ubicación en la página web y me gustaría agendar una consulta.",
  );
  const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
  const urlGoogleMaps =
    "https://www.google.com/maps/search/?api=1&query=Av.+Empresarios+150+Puerta+de+Hierro+Zapopan+Jalisco";
  const correoContacto = "Dra_MariaRamos@gmail.com";

  // Detecta cuando el usuario se acerca al mapa (350px antes) para montarlo fresco
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRenderMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px" },
    );

    if (mapSectionRef.current) {
      observer.observe(mapSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fallback de seguridad una vez que el iframe empieza a montarse
  useEffect(() => {
    if (!shouldRenderMap) return;
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [shouldRenderMap]);

  return (
    <section id="contacto" className="contact-section" ref={mapSectionRef}>
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
                <MapPin size={24} color="var(--color-primary)" />
              </div>
              <div className="contact-info-details">
                <a
                  href={urlGoogleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <h4>Dirección</h4>
                  <p>Av. Empresarios 150, Piso 5, Consultorio 502</p>
                  <p>Puerta de Hierro, Zapopan, Jal.</p>
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Clock size={24} color="var(--color-primary)" />
              </div>
              <div className="contact-info-details">
                <h4>Horarios de Atención</h4>
                <p>Lunes a Viernes: 9:00 AM – 7:00 PM</p>
                <p>Sábados: 9:00 AM – 2:00 PM</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Mail size={24} color="var(--color-primary)" />
              </div>
              <div className="contact-info-details">
                <a href={`mailto:${correoContacto}`} className="contact-link">
                  <h4>Email</h4>
                  <p>{correoContacto}</p>
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Phone size={24} color="var(--color-primary)" />
              </div>
              <div className="contact-info-details">
                <a href={`tel:${numeroTelefono}`} className="contact-link">
                  <h4>Teléfonos de Contacto</h4>
                  <p>Citas: (33) 27825329</p>
                  <p>Urgencias: (33) 27825329</p>
                </a>
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
            {!isMapLoaded && (
              <div className="contact-map-skeleton">
                <MapPin size={32} color="var(--color-primary)" />
                <span>Cargando ubicación en mapa...</span>
                <a
                  href={urlGoogleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-fallback-btn"
                >
                  Abrir directamente en Google Maps <ExternalLink size={14} />
                </a>
              </div>
            )}

            {shouldRenderMap && (
              <iframe
                title="Ubicación del consultorio pediátrico"
                src="https://maps.google.com/maps?q=20.7088,-103.4136&hl=es&z=16&output=embed"
                className={`contact-map-iframe ${isMapLoaded ? "loaded" : ""}`}
                allowFullScreen
                onLoad={() => setIsMapLoaded(true)}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
