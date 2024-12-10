import { Check } from "lucide-react";

const student = [
  {
    id: 1,
    profile: "Puntual",
  },
  {
    id: 2,
    profile: "Respetuoso",
  },
  {
    id: 3,
    profile: "Responsable",
  },
  {
    id: 4,
    profile: "Honesto",
  },
];

interface Props {
  title: string;
}

export default function StudentCard({ title }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Contenedor principal */}
      <div className="bg-white pt-8 shadow-lg rounded-lg">
        <h4 className="text-4xl text-title text-center font-bold">{title}</h4>
        <div className="container grid grid-cols-1 sm:grid-cols-2 m-auto p-6">
          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src="/SECUNDARIA.png"
              alt="nivel primaria"
              className="h-[23rem] sm:h-[33rem] object-contain"
            />
          </div>

          {/* Lista de características */}
          <div className="w-full">
            <div className="leading-10 text-base mt-4">
              {student.map((student) => (
                <span key={student.id} className="flex items-center mb-2">
                  <Check className="text-primary" />
                  <p className="ml-3">{student.profile}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
