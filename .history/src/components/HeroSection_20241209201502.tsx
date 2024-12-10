const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/admision-hero.jpg')",
        backgroundAttachment: "fixed", // Esto fija la imagen al hacer scroll
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        ¡Ya Iniciamos!
        </h1>
        <p className="sm:text-7xl text-5xl   mb-8 text-subtitle ">
          Admision 2025
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg">
            Aprende Más
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-lg">
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
