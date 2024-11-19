import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import { ScheduleData } from "../data/data";
 

export default function VacationPage() {
  return (
    <div>
        <Hero subtitle="EXAMEN SEMANAL" title="Ciclo Vacacional 2025" img="/LABORATORIO.png" colorWave="#fff"/>
        <Schedule />
    </div>
  )
}
