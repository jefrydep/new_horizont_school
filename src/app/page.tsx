import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import PresentationCard from "@/components/PresentationCard";
import RegisterCard from "@/components/RegisterCard";
import StudentCard from "@/components/StudentCard";
import TrajectoryCard from "@/components/TrajectoryCard";

export default function Home() {
  return (
    <div className=" ">
      <Hero title="¡Ya Iniciamos!" subtitle="ADMISION" year="2025" />
      <TrajectoryCard />
      <PresentationCard title="¡Bienvenidos Al Colegio!" subtitle="Nuevo Horizonte" />
      <StudentCard title="Nuestro Estudiante Es:" />
      <RegisterCard title="Proceso De Matricula 2025" />
      <Form />
      <Location/>
    </div>
  );
}
