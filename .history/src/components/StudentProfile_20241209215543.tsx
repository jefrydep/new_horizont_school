import { CheckCircle } from "lucide-react";

const StudentProfile = () => {
  // Virtudes académicas
  const academicVirtues = [
    "Dominio de herramientas tecnológicas",
    "Pensamiento crítico y resolución de problemas",
    "Capacidad de análisis y síntesis",
    "Habilidades en ciencias exactas y ciencias sociales",
    "Adaptación a diferentes estilos de aprendizaje",
    "Participación activa en proyectos de investigación",
    "Alta capacidad de trabajo en equipo en entornos académicos",
  ];

  // Virtudes personales
  const personalVirtues = [
    "Responsabilidad y puntualidad",
    "Empatía y respeto hacia los demás",
    "Habilidades de liderazgo y colaboración",
    "Desarrollo emocional y manejo de estrés",
    "Creatividad e innovación en proyectos personales",
    "Compromiso con el bienestar social y ecológico",
    "Desarrollo de habilidades comunicativas",
    "Ética y valores en el día a día",
  ];

  return (
    <div className="bg-gray-50 py-10 pt-48">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        {/* Imagen destacada */}
        <div className="mb-8 text-center">
          <img
            src="/SECUNDARIA.png" // Cambia esta ruta por la imagen destacada que desees usar
            alt="Perfil Estudiantil"
            className=" h-48   rounded-xl shadow-xl"
          />
        </div>

        {/* Título */}
        <h2 className="text-4xl font-bold text-center text-primary mb-6">
          Perfil del Estudiante
        </h2>

        {/* Introducción */}
        <p className="text-lg text-gray-700 text-center mb-8">
          Nuestro enfoque integral permite que cada estudiante se desarrolle tanto en el ámbito académico como personal. A continuación, te mostramos las principales virtudes que destacamos en nuestro programa educativo:
        </p>

        {/* Sección de virtudes académicas */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-primary mb-4">Desarrollo Académico</h3>
          <p className="text-lg text-gray-700 mb-4">
            En nuestra institución, buscamos que nuestros estudiantes no solo aprendan, sino que desarrollen habilidades críticas y analíticas para sobresalir en su futuro académico y profesional.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {academicVirtues.map((virtue, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                <p className="ml-3 text-gray-800">{virtue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de virtudes personales */}
        <div>
          <h3 className="text-3xl font-semibold text-primary mb-4">Desarrollo Personal</h3>
          <p className="text-lg text-gray-700 mb-4">
            Fomentamos el crecimiento personal de nuestros estudiantes para que se conviertan en individuos responsables, éticos, y conscientes de su entorno social y emocional.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {personalVirtues.map((virtue, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                <p className="ml-3 text-gray-800">{virtue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
