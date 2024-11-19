
// Definir los tipos para las props
interface ScheduleCardProps {
  nivel: string;
  horario: string;
  actividades: string[];
  talleres?: string[];
}

// Componente de tarjeta para mostrar la información
const ScheduleCard: React.FC<ScheduleCardProps> = ({ nivel, horario, actividades, talleres }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg  w-full sm:w-72 m-4 p-6 hover:scale-105 transition-transform">
      <h2 className="text-2xl text-title font-semibold mb-4">{nivel}</h2>
      <h3 className="text-xl text-gray-800 mb-4">Horario: {horario}</h3>

      <h4 className="text-lg text-gray-700 font-medium mt-4">Actividades:</h4>
      <ul className="list-none pl-0 mt-2">
        {actividades.map((actividad, index) => (
          <li key={index} className="text-gray-600 text-base mb-2">{actividad}</li>
        ))}
      </ul>

      {talleres && (
        <>
          <h4 className="text-lg text-gray-700 font-medium mt-4">Talleres:</h4>
          <ul className="list-none pl-0 mt-2">
            {talleres.map((taller, index) => (
              <li key={index} className="text-gray-600 text-base mb-2">{taller}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ScheduleCard;
