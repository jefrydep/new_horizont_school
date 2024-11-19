import ScheduleCard from './Schedule.card';
import { ScheduleData } from '@/app/data/data';
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
