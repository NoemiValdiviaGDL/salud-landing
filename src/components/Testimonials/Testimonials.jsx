import { useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import "./Testimonials.css";

export const Testimonials = () => {
  const googleReviewUrl =
    "https://search.google.com/local/writereview?placeid=ChIJuSZ8FBCvKIQRThtHOXOQMEw";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-tag">Google Reviews</span>
        <h2 className="testimonials-title">Lo que Opinan las Familias</h2>
        <p className="testimonials-subtitle">
          Reseñas 100% verificadas directamente desde nuestra ficha de Google
          Business.
        </p>
      </div>
      <div className="testimonials-widget-container">
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-5f9f877b-5314-4516-aa10-b7a949397c3d"
          data-elfsight-app-lazy
        ></div>
      </div>
      <div className="testimonials-cta-wrapper">
        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-google-review"
        >
          <Star size={18} fill="#ffffff" color="#ffffff" />
          Dejar una opinión en Google
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
