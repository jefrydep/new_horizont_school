"use client";

const imagesHero = [
  { id: 1, path: "/matricula-2025.jpg" },
  { id: 2, path: "/matricula-2025-2.jpg" },
  { id: 3, path: "/matricula-2025-3.jpg" },
  { id: 4, path: "/matricula-2025-4.jpg" },
  { id: 5, path: "/matricula-2025-5.jpg" },
  { id: 6, path: "/ingresante.jpg" },
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
      opts={{
        align: "start",
        slidesToScroll: 1,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000, // Intervalo de 3 segundos entre las imágenes
        }),
      ]}
      className="w-screen h-screen bg-gray-900 relative overflow-hidden"
    >
      <CarouselContent className="flex">
        {imagesHero.map((img) => (
          <CarouselItem
            key={img.id}
            className="flex-[0_0_calc(100%)] sm:flex-[0_0_calc(50%)] lg:flex-[0_0_calc(33.333%)] px-2"
          >
            {/* Cada imagen ocupa el 100% en móviles, el 50% en tabletas y el 33% en pantallas grandes */}
            <div className="h-full flex items-center justify-center">
              <img
                src={img.path}
                alt={`Imagen ${img.id}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Controles de navegación */}
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer" />
    </Carousel>
  );
}
