 

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/primaria.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a Nuestra Página</h1>
        <p className="text-lg mb-8">Crea experiencias únicas con soluciones innovadoras.</p>
        
        {/* Buttons */}
        <div className="flex space-x-4">
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
