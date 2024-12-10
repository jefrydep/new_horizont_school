"use client";

const docente = {
  name: "Dr. Laura Martínez",
  title: "Profesora de Matemáticas",
  image: "/docentes/laura.jpg", // Asegúrate de tener la imagen del docente en la carpeta pública
  bio: "Soy profesora de Matemáticas con más de 10 años de experiencia enseñando en primaria y secundaria. Mi pasión es ayudar a los estudiantes a descubrir el fascinante mundo de los números.",
  qualifications: [
    "Licenciada en Matemáticas - Universidad Nacional",
    "Máster en Educación Secundaria - Universidad de los Andes",
    "Certificación en Pedagogía Digital",
  ],
  experience: [
    "5 años de experiencia enseñando en nivel primario",
    "6 años de experiencia en secundaria, especializado en álgebra y cálculo",
    "Experiencia en proyectos educativos digitales e interactivos",
  ],
  message: "Estoy aquí para ayudarte a alcanzar tu máximo potencial. Mi objetivo es hacer que las matemáticas sean comprensibles y divertidas para todos. ¡Espero verte en clase pronto!",
};

export default function TeacherProfile() {
  return (
    <div className="w-full pt-44 bg-gradient-to-r from-green-500 to-teal-600 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Imagen del Docente */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              src={docente.image}
              alt={docente.name}
              className="w-full h-80 object-cover rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Información del Docente */}
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold text-center md:text-left mb-4">{docente.name}</h2>
            <h3 className="text-xl font-semibold text-center md:text-left mb-6">{docente.title}</h3>
            <p className="text-lg mb-6 text-center md:text-left">{docente.bio}</p>

            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-2">Calificaciones</h4>
              <ul className="list-disc pl-5">
                {docente.qualifications.map((qualification, index) => (
                  <li key={index} className="text-lg">{qualification}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-2">Experiencia</h4>
              <ul className="list-disc pl-5">
                {docente.experience.map((exp, index) => (
                  <li key={index} className="text-lg">{exp}</li>
                ))}
              </ul>
            </div>

            <p className="text-lg italic">{docente.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
