import Carrusel from "@/components/Carrusel";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import HighlightStudent from "@/components/HighligtStudent";
import Gallery from "@/components/ImageGalerry";
import Location from "@/components/Location";
import PresentationCard from "@/components/PresentationCard";
import RegisterCard from "@/components/RegisterCard";
import SchoolCouncil from "@/components/SchoolCouncil";
import StudentCard from "@/components/StudentCard";
import Testimonials from "@/components/Testimonios";
import TrajectoryCard from "@/components/TrajectoryCard";

export default function Home() {
  return (
    <div className="">
      {/* <Hero colorWave="#fff" title="¡Ya Iniciamos!" subtitle="ADMISION" year="2025" /> */}
      <HeroSection />
      <HighlightStudent />

      <Carrusel />
      <TrajectoryCard />
      <Gallery />
      <PresentationCard
        title="¡Bienvenidos Al Colegio!"
        subtitle="Nuevo Horizonte"
      />
      <StudentCard title="Nuestro Estudiante Es:" />
      {/* <RegisterCard title="Proceso De Matrícula 2025" /> */}
      <Testimonials />
      <Form />
      <Location />
    </div>
  );
}
