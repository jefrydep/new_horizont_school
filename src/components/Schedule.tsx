import React from 'react';
import ScheduleCard from './Schedule.card';
import { ScheduleData } from '@/app/data/data';

// Definir los tipos para los datos de horarios
interface Horario {
  nivel: string;
  horario: string | { manana: string; talleres: string };
  actividades: string[];
  talleres?: string[];
}

interface HorariosProps {
  horarios: Horario[];
}

// Componente principal que recibe el array de objetos y renderiza las tarjetas
const Schedule = () => {
  return (
    <div className="flex flex-wrap justify-center mt-6">
      { ScheduleData.map((item, index) => (
         <ScheduleCard
         key={index}
         nivel={item.nivel}
         horario={typeof item.horario === 'string' ? item.horario : item.horario.manana}
         actividades={item.actividades}
         talleres={item.talleres}
       />
      ))}
    </div>
  );
};

export default Schedule;
