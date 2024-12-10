"use client";
// import { motion } from "framer-motion";

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

export default function TeacherProfile() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Título del perfil */}
          <h2 className="text-4xl font-bold mb-6">{profile.title}</h2>

          {/* Descripción del perfil docente */}
          <p className="text-lg mb-8">{profile.description}</p>

          {/* Áreas de especialización */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Áreas de Especialización</h3>
            <ul className="flex flex-wrap justify-center gap-6 text-xl">
              {profile.specialties.map((specialty, index) => (
                <motion.li
                  key={index}
                  className="bg-teal-500 text-white py-2 px-6 rounded-full shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  {specialty}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Logros Institucionales */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Logros Institucionales</h3>
            <ul className="space-y-4 text-xl text-gray-100">
              {profile.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Fotos del equipo docente */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.teamPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <img
                  src={photo}
                  alt={`Docente ${index + 1}`}
                  className="w-full h-60 object-cover rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* Botón de acción */}
          <motion.button
            className="mt-12 px-8 py-3 bg-teal-600 text-white rounded-full text-lg shadow-lg hover:bg-teal-700 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Conoce a Nuestros Docentes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
