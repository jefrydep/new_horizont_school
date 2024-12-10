 

const imagesHero = [
    {
      id: 1,
      path: "/matricula-2025.jpg",
    },
    {
      id: 2,
      path: "/matricula-2025-2.jpg",
    },
    {
      id: 3,
      path: "/matricula-2025-3.jpg",
    },
    {
      id: 4,
      path: "/matricula-2025-4.jpg",
    },
    {
      id: 5,
      path: "/matricula-2025-5.jpg",
    },
    {
      id: 6,
      path: "/ingresante.jpg",
    },
  ];
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";
export default function Carrusel() {
  return (
             
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className=" px-3    sm:w-[50%] z-10  "
            >
              <CarouselContent className="min">
                {imagesHero.map((img) => (
                  <CarouselItem key={img.id}>
                    <div className=" ">
                      <div className="    flex justify-center   z-10">
                        <img
                          src={img.path}
                          alt="Imagen principal"
                          className="   w-full       "
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext className="hidden sm:block" />
            </Carousel> */}
            </div>
            {/* <div className="absolute bottom-0 sm:hidden w-full h-16">
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.00,49.98 C149.54,170.23 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 "
                  fill={colorWave ? colorWave : "#1c1c1c"} // Color de la ola (puedes usar cualquier color)
                ></path>
              </svg>
            </div> */}
          </div>
  
          {/* La ola (wave) en la parte inferior */}
        </section>
        {/* <div className="relative hidden sm:block  w-full h-16">
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
  )
}
