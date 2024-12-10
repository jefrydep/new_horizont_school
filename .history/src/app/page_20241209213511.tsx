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
import { councilMembers } from "./data/data";
import StudentCouncil from "@/components/SchoolCouncil";

export default function Home() {
  return (
    <div className="">
      {/* <Hero colorWave="#fff" title="¡Ya Iniciamos!" subtitle="ADMISION" year="2025" /> */}
      <HeroSection />
      <HighlightStudent />

      {/* <TrajectoryCard />s */}
      <Carrusel />
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
      <StudentCouncil
        title="Municipio Escolar - Nivel Secundaria"
        description="Conformado por estudiantes líderes que representan y guían a la comunidad estudiantil."
        members={councilMembers}
      />
    </div>
  );
}
