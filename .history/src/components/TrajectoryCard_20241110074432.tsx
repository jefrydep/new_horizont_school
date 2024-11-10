import { GraduationCapIcon, School, TrophyIcon } from "lucide-react";

// interface Props {
//     title: string;
//     subtitle: string
// }
export default function TrajectoryCard() {
    return (
        <div className="bg-backgroundGray w-full  mt-10 shadow">

            <div className="container m-auto py-14"  >
                <div className="flex    flex-col items-center gap-4 justify-center ">
                    <h2 className="text-5xl text-center mt-5">Nuestra Trayectoria</h2>
                    <p className="text-lg px-4">
                        Desde 1995, cientos de alumnos y alumnas han sido formados con éxito
                        con un modelo educativo que ha permitido la consecución del pleno desarrollo su personalidad.
                    </p>
                </div>
                <div>
                    <div className="flex flex-col gap-10 sm:flex-row justify-between mt-16 px-2 py-2">
                        <div className="  flex gap-8  items-center  ">
                            <div>
                                <School size={70} color="#1c1c1c" className="" />
                            </div>
                            <div>
                                <span className="text-6xl text-[#73060c]">+10</span>
                                <h3 className="text-4xl">Años De Experiencia</h3>
                            </div>
                        </div>
                        <div className="  flex gap-8  items-center  ">
                            <div>
                                <TrophyIcon size={70}color="#1c1c1c" className="" />
                            </div>
                            <div>
                                <span className="text-6xl  text-[#73060c]">5</span>
                                <h3 className="text-4xl">Premios nacionales</h3>
                            </div>
                        </div>
                        <div className="  flex gap-8  items-center  ">
                            <div>
                                <TrophyIcon size={70} color="#1c1c1c" className="" />
                            </div>
                            <div>
                                <span className="text-6xl text-[#73060c]">+5</span>
                                <h3 className="text-4xl">Premios nacionales</h3>
                            </div>
                        </div>
                        <div className="  flex gap-8  items-center  ">
                            <div>
                                <GraduationCapIcon size={70}color="#1c1c1c" className="" />
                            </div>
                            <div>
                                <span className="text-6xl text-[#73060c]">+1150</span>
                                <h3 className="text-4xl">Estudiantes Egresados</h3>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
