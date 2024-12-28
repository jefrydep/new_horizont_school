import StudentCouncil from "@/components/SchoolCouncil";
import { councilMembers } from "../data/data-image";

export default function page() {
  return (
    <div>
      {" "}
      <StudentCouncil
        title="Municipio Escolar - Nivel Secundaria"
        description="Conformado por estudiantes líderes que representan y guían a la comunidad estudiantil."
        members={councilMembers}
      />
    </div>
  );
}
