"use client";

const imagesGallery = [
  { id: 1, path: "/matricula-2025.jpg", alt: "Imagen 1" },
  { id: 2, path: "/matricula-2025-2.jpg", alt: "Imagen 2" },
  { id: 3, path: "/matricula-2025-3.jpg", alt: "Imagen 3" },
  { id: 4, path: "/matricula-2025-4.jpg", alt: "Imagen 4" },
  { id: 5, path: "/matricula-2025-5.jpg", alt: "Imagen 5" },
  { id: 6, path: "/ingresante.jpg", alt: "Imagen 6" },
];

export default function Gallery() {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Galería de Imágenes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imagesGallery.map((img) => (
            <div
              key={img.id}
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={img.path}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
