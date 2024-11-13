// src/components/Card.jsx
import React from 'react';

const Card = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            {/* Contenedor de texto */}
            <div className="p-6 flex-1">
                <h2 className="text-2xl font-bold text-title">¿Quiénes somos?</h2>
                <p className="mt-4 text-gray-600">
                    Somos un Colegio de reconocida trayectoria educativa, que imparte una educación democrática centrada en el desarrollo del ser humano, en el marco del conocimiento y valoración de la cultura peruana.
                </p>
            </div>

            {/* Imagen a la derecha */}
            <div className="w-full md:w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src="https://via.placeholder.com/500x300"
                    alt="Imagen de quiénes somos"
                />
            </div>
            
        </div>
    );
};

export default Card;
