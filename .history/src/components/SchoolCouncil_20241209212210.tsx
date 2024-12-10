import React from "react";

interface Member {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
}

interface Props {
  title: string;
  members: Member[];
}

const SchoolCouncil: React.FC<Props> = ({ title, members }) => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
        <p className="text-lg text-gray-600 mb-12">
          Conoce a los miembros de nuestra junta directiva, quienes lideran la
          institución con dedicación y profesionalismo.
        </p>

        {/* Miembros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              {/* Imagen */}
              <div className="mb-4">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <span className="text-xl font-bold">N/A</span>
                  </div>
                )}
              </div>
              {/* Información */}
              <h3 className="text-xl font-semibold text-gray-700">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolCouncil;
