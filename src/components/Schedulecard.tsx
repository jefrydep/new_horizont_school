// components/ScheduleCard.tsx

import React from 'react';

interface ScheduleCardProps {
  nivel: string;
  ciclo: string;
  horario: string;
  areasCurriculares: string[];
  talleres: string[];
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ nivel, ciclo, horario, areasCurriculares, talleres }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-lg mx-auto hover:shadow-2xl transition-all">
      <h2 className="text-2xl font-semibold text-center text-title mb-4">{nivel} - {ciclo}</h2>
      <p className="text-lg text-subtitle mb-4"><strong>Horario:</strong> {horario}</p>

      {/* Áreas curriculares */}
      {areasCurriculares.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-medium text-primary mb-2">Áreas Curriculares:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {areasCurriculares.map((area, index) => (
              <li key={index} className="text-gray-600">{area}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Talleres */}
      {talleres.length > 0 && (
        <div>
          <h3 className="text-xl font-medium text-primary mb-2">Talleres:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {talleres.map((taller, index) => (
              <li key={index} className="text-gray-600">{taller}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScheduleCard;
