import { ingresanteUni } from "@/app/data/data-image";

const HighlightStudent = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-white py-8">
      {/* Título principal */}
      <h2 className="text-5xl font-bold text-center animate-bounce text-primary mb-8">
        Ingresante a la Universidad
      </h2>

      {/* Contenedor principal */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center bg-white m-2 text-gray-800 rounded-lg shadow-lg overflow-hidden p-4">
          {/* Columna Izquierda: Información */}
          <div className="md:w-auto text-center md:text-left p-4">
            <h1 className="text-4xl font-bold mb-4 animate-in text-primary">
              ¡Felicitaciones!
            </h1>
            <h2 className="text-2xl mb-2 text-title font-bold">
              Shannen Diana Mamani Justo
            </h2>
            <p className="text-lg mb-4 font-light text-subtitle">
              Ha logrado ingresar con éxito a:
            </p>
            <p className="text-xl font-semibold">
              Universidad Nacional de San Agustin de Arequipa
            </p>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="md:w-auto flex justify-center mt-8 md:mt-0">
            <img
              src={ingresanteUni}
              alt="Estudiante"
              className="max-w-full h-auto rounded-full border-4 border-primary shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightStudent;
