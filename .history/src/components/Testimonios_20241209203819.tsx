"use client";

const testimonios = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "Estudiante de Ingeniería",
    testimonial: "Gracias a esta institución, pude lograr mis sueños y hoy soy un profesional exitoso.",
    image: "/testimonios/juan.jpg", // Asegúrate de tener estas imágenes en tu carpeta pública
  },
  {
    id: 2,
    name: "Ana Gómez",
    role: "Graduada de Medicina",
    testimonial: "Los profesores y el ambiente en la universidad fueron clave para mi éxito académico.",
    image: "/testimonios/ana.jpg",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    role: "Estudiante de Derecho",
    testimonial: "Una experiencia increíble, con recursos y apoyo que me ayudaron a desarrollarme profesionalmente.",
    image: "/testimonios/carlos.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-primary to-title text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Lo que dicen nuestros estudiantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white text-gray-900 p-8 rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl transform"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonio.image}
                  alt={testimonio.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-indigo-600"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{testimonio.name}</h3>
                  <p className="text-sm text-gray-500">{testimonio.role}</p>
                </div>
              </div>
              <p className="text-lg italic">{`"${testimonio.testimonial}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
