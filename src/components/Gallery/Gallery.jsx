import "./Gallery.css";
import GalleryPicture1 from "../../images/consultorio1.avif";
import GalleryPicture2 from "../../images/consultorio2.avif";
import GalleryPicture3 from "../../images/consultorio8.avif";
import GalleryPicture4 from "../../images/consultorio4.avif";
import GalleryPicture5 from "../../images/consultorio5.avif";
import GalleryPicture6 from "../../images/consultorio6.avif";

export const Gallery = () => {
  const imagenesGaleria = [
    {
      id: 1,
      src: GalleryPicture1,
      titulo: "Consultorio Pediátrico Amigable",
    },
    {
      id: 2,
      src: GalleryPicture2,
      titulo: "Atención Cálida",
    },
    {
      id: 3,
      src: GalleryPicture3,
      titulo: "Equipamiento de Crecimiento y Salud",
    },
    {
      id: 4,
      src: GalleryPicture4,
      titulo: "Ambiente Seguro para Recién Nacidos",
    },
    {
      id: 5,
      src: GalleryPicture5,
      titulo: "Monitoreo Nutricional y Crecimiento",
    },
    {
      id: 6,
      src: GalleryPicture6,
      titulo: "Área de Exploración e Higiene Médica",
    },
  ];

  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-header">
        <span className="gallery-tag">Instalaciones</span>
        <h2 className="gallery-title">Un Espacio Seguro para Tus Hijos</h2>
        <p className="gallery-subtitle">
          Diseñado para brindar comodidad, higiene y tranquilidad a los más
          pequeños durante su visita.
        </p>
      </div>

      <div className="gallery-grid">
        {imagenesGaleria.map((item) => (
          <div key={item.id} className="gallery-card">
            <img
              src={item.src}
              alt={item.titulo}
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-caption">
              <h4>{item.titulo}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
