import { newStudents, promotedStudents, registerProcess } from "@/app/data/data";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"
interface Props {
    title: string;
}
export default function RegisterCard({ title }: Props) {
    return (
        <div className="bg-primary pt-8">
            <div className="text-4xl   text-white font-bold text-center">
                {title}
            </div>
            <div className="container grid  grid-cols-1 sm:grid-cols-2   m-auto p-3">

                <div className="  w-full ">
                    {/* <h4 className="text-4xl mt-4 text-title font-bold">{title}</h4> */}
                    {/* <h4 className="text-4xl">{subtitle}</h4> */}
                    <div className="leading-10 text-base mt-4">
                        <div>
                            {/* <Accordion type="single" collapsible>
                                <AccordionItem value="item-1 "  >
                                    <AccordionTrigger className="text-primary font-bold ">NIVEL INICIAL</AccordionTrigger>
                                    <AccordionContent className="text-base leading-8">
                                        ¡Éste es nuestro hermoso mundo!
                                        Nuestra metodología respeta los tiempos de desarrollo y aprendizaje de cada niño, aplicamos un currículo dividido en módulos especiales acorde a cada etapa.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2 "  >
                                    <AccordionTrigger className="text-primary font-bold ">NIVEL PRIMARIA </AccordionTrigger>
                                    <AccordionContent className="text-base leading-8">
                                        ¡Excelencia y dedicación en la formación del estudiante!
                                        Preparamos a nuestros estudiantes para responder a las exigencias de un mundo globalizado.
                                    </AccordionContent>
                                </AccordionItem>


                                <AccordionItem value="item-3 "  >
                                    <AccordionTrigger className="text-primary font-bold ">NIVEL SECUNDARIA </AccordionTrigger>
                                    <AccordionContent className="text-base leading-8">
                                        ¡Calidad e innovación en una formación integral!
                                        Nuestra finalidad fundamental es consolidar a través de un trabajo especializado por áreas, un plan estructurado de las áreas curriculares que está enfocado en el desarrollo de competencias y proyectos científicos.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion> */}

                            El proceso de matrícula para estudiantes del colegio se realizará del 02 de ENERO al 03 de MARZO de 2025. De no efectuarse la renovación del contrato de servicios educativos en los plazos descritos, la vacante se pondrá a disposición de los estudiantes nuevos conforme al contrato de servicios educativos.
                            Para estudiantes nuevos y público en general:
                            El proceso de matrícula para estudiantes nuevos y público en general se realizará del 02 de ENERO de 2025, hasta agotar la vacante.



                        </div>

                    </div>

                </div>
                <div >
                    <img src="/INICIAL.png" sizes="80px" alt="" />
                </div>



            </div>
            <div className="container   mx-auto   py-12 px-4">
                <h2 className="text-4xl font-bold text-center   mb-8 text-title">REQUISITOS PARA ESTUDIANTES PROMOVIDOS EN LA I.E.</h2>

                <div className="overflow-x-auto">
                    <table className="  table-auto bg-white shadow-lg rounded-lg border-separate border-spacing-0">
                        {/* Cabecera de la tabla */}
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="py-3 px-6 text-lg font-semibold text-center">#</th>
                                <th className="py-3 px-6 text-lg font-semibold">Descripción</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla */}
                        <tbody>
                            {/* Paso 1 */}
                            {promotedStudents.map(p => (


                                <tr className="hover:bg-gray-50" key={p.id}>
                                    <td className="py-3 px-6 text-center text-xl font-semibold text-gray-700">{p.id}</td>
                                    <td className="py-3 px-6 text-gray-600">
                                        {p.requirement}
                                    </td>
                                </tr>
                            ))



                            }


                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container   mx-auto   py-12 px-4">
                <h2 className="text-4xl font-bold text-center text-title mb-8">REQUISITOS PARA ESTUDIANTES NUEVOS</h2>

                <div className="overflow-x-auto">
                    <table className="  table-auto bg-white shadow-lg rounded-lg border-separate border-spacing-0">
                        {/* Cabecera de la tabla */}
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="py-3 px-6 text-lg font-semibold text-center">#</th>
                                <th className="py-3 px-6 text-lg font-semibold">Descripción</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla */}
                        <tbody>
                            {/* Paso 1 */}
                            {newStudents.map(p => (


                                <tr className="hover:bg-gray-50" key={p.id}>
                                    <td className="py-3 px-6 text-center text-xl font-semibold text-gray-700">{p.id}</td>
                                    <td className="py-3 px-6 text-gray-600">
                                        {p.titulo}
                                    </td>
                                </tr>
                            ))



                            }


                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container   mx-auto   py-12 px-4">
                <h2 className="text-4xl font-bold text-center text-title mb-8">PROCEDIMIENTO DEL PROCESO DE MATRÍCULA PARA ESTUDIANTES NUEVOS</h2>

                <div className="overflow-x-auto">
                    <table className="  table-auto bg-white shadow-lg rounded-lg border-separate border-spacing-0">
                        {/* Cabecera de la tabla */}
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="py-3 px-6 text-lg font-semibold text-center">#</th>
                                <th className="py-3 px-6 text-lg font-semibold">Descripción</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla */}
                        <tbody>
                            {/* Paso 1 */}
                            {registerProcess.map(p => (


                                <tr className="hover:bg-gray-50" key={p.id}>
                                    <td className="py-3 px-6 text-center text-xl font-semibold text-gray-700">{p.id}</td>
                                    <td className="py-3 px-6 text-gray-600">
                                        {p.titulo}
                                    </td>
                                </tr>
                            ))



                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
