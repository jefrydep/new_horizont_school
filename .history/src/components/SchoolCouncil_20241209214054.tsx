import React from "react";

interface StudentMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
}

interface Props {
  title: string;
  description: string;
  members: StudentMember[];
}

const StudentCouncil: React.FC<Props> = ({ title, description, members }) => {
  return (
    <div className="bg-gray-100 py-12 pt-48">
      <div className="container mx-auto text-center">
        {/* Título y descripción */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-10">{description}</p>

        {/* Miembros del municipio escolar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              {/* Foto del estudiante */}
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
              {/* Información del estudiante */}
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

export default StudentCouncil;
