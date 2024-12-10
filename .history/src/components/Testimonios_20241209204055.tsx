const HighlightStudent = () => {
  return (
    <div className=" flex items-center justify-center bg-gradient-to-r  from-primary to-white">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-center bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden p-8 ">
        {/* Columna Izquierda: Información */}
        <div className="md:w-auto text-center md:text-left p-4">
          <h1 className="text-4xl font-bold mb-4 text-primary">¡Felicitaciones!</h1>
          <h2 className="text-2xl mb-2">Nombre del Estudiante</h2>
          <p className="text-lg mb-4 font-light">Ha logrado ingresar con éxito a:</p>

          {/* Subtítulo */}
          <p className="text-xl font-semibold">Universidad Nacional de Ejemplo</p>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="md:w-auto flex justify-center mt-8 md:mt-0">
          <img
            src="/ingresante.jpg"
            alt="Estudiante"
            className="w-64  rounded-full border-4 border-primary shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HighlightStudent;
