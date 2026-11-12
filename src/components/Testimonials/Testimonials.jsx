import { useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import "./testimonials.css";

export const Testimonials = () => {
  const googleReviewUrl =
    "https://search.google.com/local/writereview?placeid=ChIJuSZ8FBCvKIQRThtHOXOQMEw";

  useEffect(() => {
    const scriptUrl = "https://static.elfsight.com/platform/platform.js";
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-tag">Google Reviews</span>
          <h2 className="testimonials-title">Lo que Opinan las Familias</h2>
          <p className="testimonials-subtitle">
            Reseñas 100% verificadas directamente desde nuestra ficha de Google
            Business.
          </p>
        </div>

        <div className="testimonials-widget-container">
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
            <Star
              size={18}
              fill="var(--color-mint)"
              color="var(--color-mint)"
            />
            Dejar una opinión en Google
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
