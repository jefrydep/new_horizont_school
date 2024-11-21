import Hero from "@/components/Hero";
import ScheduleCard from "@/components/Schedulecard";
import { ScheduleData } from "../data/data";


export default function VacationPage() {
  return (
    <div>
      <Hero subtitle="EXAMEN SEMANAL" title="Ciclo Vacacional 2025" img="/PRIMARIA.png" colorWave="#fff" />
      {/* <ScheduleCard  /> */}
      <div className=" container m-auto flex mb-8  flex-wrap space-y-6">
        {ScheduleData.map((nivel, index) => (
          <ScheduleCard
            key={index}
            nivel={nivel.nivel}
            ciclo={nivel.ciclo}
            horario={nivel.horario}
            areasCurriculares={nivel.areasCurriculares}
            talleres={nivel.talleres}
          />
        ))}
      </div>
    </div>
  )
}
