import { Button } from "./ui/button";

interface Props {
  title: string;
  subtitle: string;
  year?: string;
  img?: string;
  colorWave?: string;
}

export default function Hero({ title, subtitle, year, img, colorWave }: Props) {
  return (
    <div className=" bg-title  ">
      <section className="container m-auto pt-36">
        {/* Contenedor con la imagen, texto y botones */}
        <div className="    flex flex-col sm:flex-row    sm:pt-40 relative">
          <div className="   flex sm:block justify-center mb-7 w-full sm:w-min font-bold      px-2 py-2 tracking-wider rounded gap-4   bg-subtitle">
            {/* <span>Inicial</span> */}
            <span>Primaria</span>
            <span>Secundaria</span>
          </div>

          <div className="   flex flex-col items-center sm:w-[50%] text-center px-4">
            <h1 className=" animate-slide-down-delay-2   text-4xl sm:text-6xl font-bold text-[#fbcc07] tracking-wider">
              {title}
              <br />
              <div>
                <span className="text-white">{subtitle}</span>
                <span className="text-white ml-6">{year}</span>
              </div>
            </h1>

            <div className="flex justify-center z-40  duration-75 text-white font-bold gap-4 mt-6">
              <Button className="rounded-3xl">
                <a
                  href="https://wa.me/+51999070701?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A"
                  target="_blank"
                >
                  Contáctenos
                </a>
              </Button>
              <Button className="bg-green-500  hover:bg-green-600 rounded-3xl">
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

          {/* Imagen */}
          <div className=" w-full  flex justify-center sm:w-[50%] z-10">
            <img
              src={img ? img : "/SECUNDARIA.png"}
              alt="Imagen principal"
              className=" h-[25rem] sm:h-[36rem]       "
            />
          </div>
          <div className="absolute bottom-0 sm:hidden w-full h-16">
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                d="M0.00,49.98 C149.54,170.23 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                fill={colorWave ? colorWave : "#1c1c1c"} // Color de la ola (puedes usar cualquier color)
              ></path>
            </svg>
          </div>
        </div>

        {/* La ola (wave) en la parte inferior */}
      </section>
      <div className="relative hidden sm:block  w-full h-16">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0.00,49.98 C149.54,170.23 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            // fill="#73060C" // Color de la ola (puedes usar cualquier color)
            fill={colorWave ? colorWave : "#1c1c1c"} // Color de la ola (puedes usar cualquier color)
          ></path>
        </svg>
      </div>
    </div>
  );
}
