import Form from "@/components/Form";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import HighlightStudent from "@/components/HighligtStudent";
import Location from "@/components/Location";
import PresentationCard from "@/components/PresentationCard";
import RegisterCard from "@/components/RegisterCard";
import StudentCard from "@/components/StudentCard";
import TrajectoryCard from "@/components/TrajectoryCard";

export default function Home() {
  return (
    <div className="">
      {/* <Hero colorWave="#fff" title="¡Ya Iniciamos!" subtitle="ADMISION" year="2025" /> */}
      <HeroSection />
      <HighlightStudent />
      
      {/* <TrajectoryCard /> */}
      <PresentationCard
        title="¡Bienvenidos Al Colegio!"
        subtitle="Nuevo Horizonte"
      />
      <StudentCard title="Nuestro Estudiante Es:" />
      <RegisterCard title="Proceso De Matrícula 2025" />
      <Form />
      <Location />
    </div>
  );
}
