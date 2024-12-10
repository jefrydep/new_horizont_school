"use client";

// Información del perfil docente de la institución
const profile = {
  title: "Nuestro Equipo Docente",
  description:
    "Nuestro equipo docente está conformado por profesionales apasionados por la educación, con una amplia experiencia y dedicación para formar a las futuras generaciones. Contamos con un equipo diverso y altamente capacitado en distintas áreas académicas, comprometidos con el crecimiento integral de cada estudiante.",
  specialties: [
    "Matemáticas",
    "Ciencias Sociales",
    "Lenguas Extranjeras",
    "Tecnologías de la Información",
    "Arte y Cultura",
  ],
  achievements: [
    "Premio Nacional de Innovación Educativa 2023",
    "Conferencias internacionales en educación",
    "Programas de intercambio educativo con universidades globales",
  ],
  teamPhotos: [
    "/img/teachers/teacher1.jpg",
    "/img/teachers/teacher2.jpg",
    "/img/teachers/teacher3.jpg",
  ],
};

export default function DocenteProfile() {
  return (
    <section className="py-16 pt-48 bg-gradient-to-r from-primary via-white-600 to-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Título del perfil */}
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">{profile.title}</h2>

          {/* Descripción del perfil docente */}
          <p className="text-lg mb-8">{profile.description}</p>

          {/* Áreas de especialización */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Áreas de Especialización</h3>
            <ul className="flex flex-wrap justify-center gap-6 text-xl">
              {profile.specialties.map((specialty, index) => (
                <li
                  key={index}
                  className="bg-teal-500 text-white py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          {/* Logros Institucionales */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Logros Institucionales</h3>
            <ul className="space-y-4 text-xl text-gray-100">
              {profile.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-lg transform transition-transform hover:translate-x-2 duration-300"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Fotos del equipo docente */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.teamPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative transform transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={photo}
                  alt={`Docente ${index + 1}`}
                  className="w-full h-60 object-cover rounded-lg shadow-xl transition-all"
                />
              </div>
            ))}
          </div>

          {/* Botón de acción */}
          <button className="mt-12 px-8 py-3 bg-teal-600 text-white rounded-full text-lg shadow-lg hover:bg-teal-700 transition-all duration-300">
            Conoce a Nuestros Docentes
          </button>
        </div>
      </div>
    </section>
  );
}
