 

const HighlightStudent = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-white">

    <div className="flex container m-auto flex-col md:flex-row items-center justify-center  text-white rounded-lg shadow-lg overflow-hidden p-8">
      {/* Columna Izquierda: Información */}
      
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">¡Felicitaciones!</h1>
        <h2 className="text-2xl mb-2">Nombre del Estudiante</h2>
        <p className="text-lg mb-4 font-light">Ha logrado ingresar con éxito a:</p>

        {/* Logo de la Institución */}
        <div className="flex items-center justify-center md:justify-start mb-4">
          <img
            src="/ingresante.jpg"
            alt="Logo Universidad"
            className="h-16 w-auto"
            />
        </div>

        {/* Subtítulo */}
        <p className="text-xl font-semibold">
          Universidad Nacional de Ejemplo
        </p>
      </div>

      {/* Columna Derecha: Imagen */}
      <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
        <img
          src="/ingresante.jpg"
          alt="Estudiante"
          className="w-64 rounded-full border-4 border-white h-full shadow-lg object-cover "
          />
      </div>
    </div>
          </div>
  );
};

export default HighlightStudent;
