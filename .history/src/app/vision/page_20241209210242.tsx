import Hero from "@/components/Hero";

export default function VisionPage() {
  return (
    <div className="pt-48">
      {" "}
      {/* <Hero title="Nuestra Misión" subtitle="Nuestra Visión" colorWave="#fff" /> */}
      <div className=" w-1/2 mx-auto my-10 px-6">
        {/* Título centrado */}
        <h2 className="text-3xl font-semibold text-center   mb-10  text-subtitle">
          Nuestra <b>Visión y Misión</b>
        </h2>

        {/* Grid de 2 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Tarjeta de Visión */}
          <div className="bg-white shadow-xl rounded-lg p-6">
            <h3 className="text-xl font-semibold   mb-4 text-title">Visión</h3>
            <p className="text-gray-600 text-base  tracking-widest">
              “Ser una Institución Educativa acreditada que brinde una educación
              de calidad, con docentes, estudiantes y padres de familia
              proactivos investigadores y emprendedores”.
            </p>
          </div>

          {/* Tarjeta de Misión */}
          <div className="bg-white shadow-xl rounded-lg p-6">
            <h3 className="text-xl font-semibold  mb-4 text-title">Misión</h3>
            <p className="text-gray-600 text-base tracking-widest">
              “Somos una Institución Educativa privada que formamos estudiantes
              líderes con valores y alto nivel académico, que les permita
              afrontar con éxito los retos del mundo globalizado”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
