import React from "react";
import "./Gallery.css";
import GalleryPicture1 from "../../images/consultorio1.jpg";
import GalleryPicture2 from "../../images/consultorio2.jpg";
import GalleryPicture3 from "../../images/consultorio3.jpg";
import GalleryPicture4 from "../../images/consultorio4.jpg";
import GalleryPicture5 from "../../images/consultorio5.jpg";
import GalleryPicture6 from "../../images/consultorio6.jpg";

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
      titulo: "Atención Cálida y Sin Miedo",
    },
    {
      id: 3,
      src: GalleryPicture3,
      titulo: "Equipamiento de Crecimiento y Salud",
    },
    {
      id: 4,
      src: GalleryPicture4,
      titulo: "Equipamiento de Crecimiento y Salud",
    },
    {
      id: 5,
      src: GalleryPicture5,
      titulo: "Equipamiento de Crecimiento y Salud",
    },
    {
      id: 6,
      src: GalleryPicture6,
      titulo: "Equipamiento de Crecimiento y Salud",
    },
  ];

  return (
    <section className="gallery-section">
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
