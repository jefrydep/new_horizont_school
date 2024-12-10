"use client"
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
      className=" px-3  w-full max-w-sm    z-10  "
    >
      <CarouselContent className="max-lg:">
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
    </Carousel>
  );
}
