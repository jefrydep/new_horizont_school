import { Check } from "lucide-react";
const student = [
    {
        id: 1,
        profile: "Emprendedor"
    },
    {
        id: 2,
        profile: "Crítico"
    },
    {
        id: 3,
        profile: "Autónomo"
    },
    {
        id: 4,
        profile: "Comunicador"
    },
    {
        id: 5,
        profile: "Investigador"
    },
    {
        id: 6,
        profile: "Feliz"
    },
    {
        id: 7,
        profile: "Competitivo"
    },
    {
        id: 8,
        profile: "Integro"
    }
]
interface Props {
    title: string;

}
export default function StudentCard({ title }: Props) {
    return (
        <div className="bg-[#fbcc07] pt-8">

            <h4 className="text-4xl  text-title text-center font-bold">{title}</h4>
            <div className="container grid  grid-cols-1 sm:grid-cols-2   m-auto p-3">
                <div>
                    <img src="/Estudiante-2.png" alt="" />
                </div>
                <div className="  w-full ">
                    {/* <h4 className="text-4xl">{subtitle}</h4> */}
                    <div className="leading-10 text-base mt-4">
                        {student.map(student => (



                            <span key={student.id} className="flex   items-center">
                                <Check />
                                <p className="ml-3">
                                    {student.profile}
                                </p>
                            </span>
                        ))}

                    </div>

                </div>


            </div>
        </div>
    )
}
