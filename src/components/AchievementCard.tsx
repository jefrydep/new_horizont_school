import React from 'react';

// Componente Card para mostrar los logros
// types.ts
export interface Achievement {
    evento: string;
    resultado: string;
}

export interface AchievementData {
    año: number;
    nivel: string;
    logros: Achievement[];
}

interface CardProps {
    year: number;
    level: string;
    achievements: Achievement[];
}

const AchievementCard: React.FC<CardProps> = ({ year, level, achievements }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-title mb-4">{`Año: ${year} | Nivel: ${level}`}</h3>
            <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600">
                        <strong className="font-medium">{achievement.evento}:</strong> {achievement.resultado}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AchievementCard;

 
