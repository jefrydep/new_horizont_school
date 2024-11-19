import { Check } from "lucide-react";
const student = [
    {
        id: 1,
        profile: "Puntual"
    },
    {
        id: 2,
        profile: "Respetuoso"
    },
    {
        id: 3,
        profile: "Responsable"
    },
    {
        id: 4,
        profile: "Honesto"
    },

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
                    <img src="/primaria.png" alt="nivel primaria" className="h-[23rem] sm:h-[33rem]" />
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
