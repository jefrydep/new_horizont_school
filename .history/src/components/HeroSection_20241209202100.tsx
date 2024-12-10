import { Button } from "./ui/button";

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Ya Iniciamos!</h1>
        <p className="sm:text-7xl text-5xl font-bold  rounded-2xl p-3     mb-8 text-subtitle ">
          Admisión 2025
        </p>

        {/* Buttons */}
        <div>
          <div className="flex justify-center z-40   duration-75 text-white  gap-4 mt-6">
            <Button className="rounded-3xl   tracking-widest">
              <a
                href="https://wa.me/+51999070701?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A"
                target="_blank"
              >
                Matrícula Online
              </a>
            </Button>
            <Button className="bg-green-500  hover:bg-green-600  tracking-widest  rounded-3xl">
              <a
                href="https://wa.me/+51999070701?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A"
                target="_blank"
              >
                Escribanos por WhatsApp
              </a>
            </Button>
          </div>
          <div className="flex gap-3 mt-8">
            <h5 className="text-subtitle ">Lema:</h5>
            <b className="tracking-wider text-white">
              “Horizontinos abriendo nuevos horizontes”
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
