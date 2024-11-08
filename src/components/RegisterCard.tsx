import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
interface Props {
    title: string;
}
export default function RegisterCard({ title }: Props) {
    return (
        <div>
            <div className="text-4xl mt-4 text-title font-bold text-center">
                {title}
            </div>
            <div className="container grid  grid-cols-1 sm:grid-cols-2   m-auto p-3">

                <div className="  w-full ">
                    {/* <h4 className="text-4xl mt-4 text-title font-bold">{title}</h4> */}
                    {/* <h4 className="text-4xl">{subtitle}</h4> */}
                    <div className="leading-10 text-base mt-4">
                        <div>
                            <Accordion type="single" collapsible>
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
                            </Accordion>




                        </div>

                    </div>

                </div>
                <div>
                    <img src="/Estudiante-2.png" alt="" />
                </div>


            </div>
        </div>
    )
}
