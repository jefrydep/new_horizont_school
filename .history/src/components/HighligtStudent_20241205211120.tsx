const HighlightStudent = () => {
  return (
    <div className="flex  flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg overflow-hidden p-8">
      {/* Columna Izquierda: Información */}
      <div className="md:w-1/2 w-full container m-auto text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">¡Felicitaciones!</h1>
        <h2 className="text-2xl mb-2">Nombre del Estudiante</h2>
        <p className="text-lg mb-4 font-light">
          Ha logrado ingresar con éxito a:
        </p>

        {/* Logo de la Institución */}
        <div className="flex items-center justify-center md:justify-start mb-4">
          <img
            src="/university-logo.png"
            alt="Logo Universidad"
            className="h-16 w-auto"
          />
        </div>

        {/* Subtítulo */}
        <p className="text-xl font-semibold">Universidad Nacional de Ejemplo</p>
      </div>

      {/* Columna Derecha: Imagen */}
      <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
        <img
          src="/student-photo.jpg"
          alt="Estudiante"
          className="h-64 w-64 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default HighlightStudent;
