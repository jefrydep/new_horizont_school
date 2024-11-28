import Hero from "@/components/Hero";



export default function AcademyPage() {
  return (
    <div>
      <Hero subtitle="ACADEMIA" title="¡Ven y Prepárate!"   />
      <div className="max-w-4xl mx-auto py-10">
        {/* Card Contenedor */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Repaso Intensivo */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-center text-primary mb-4">
              Repaso Intensivo
            </h3>
            <img
              src="/images/repaso-intensivo.jpg" // Asegúrate de tener una imagen de repaso intensivo
              alt="Repaso Intensivo"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 text-base text-center">
              Nuestro curso de repaso intensivo está diseñado para preparar a los estudiantes para los exámenes con sesiones dinámicas, enfocadas en las áreas más importantes. ¡Aprovecha esta oportunidad de reforzar tus conocimientos!
            </p>
          </div>

          {/* Verano */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-center text-primary mb-4">
              Verano
            </h3>
            <img
              src="/images/verano.jpg" // Asegúrate de tener una imagen de verano
              alt="Verano"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 text-base text-center">
              Aprovecha nuestras actividades académicas de verano para seguir aprendiendo mientras te diviertes. Cursos especializados en diferentes áreas del conocimiento, con un enfoque práctico y entretenido.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
