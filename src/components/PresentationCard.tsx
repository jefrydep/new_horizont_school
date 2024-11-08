import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


interface Props {
    title: string;
    subtitle: string;

}

export default function PresentationCard({ title, subtitle }: Props) {
    return (
        <div>

            <div className="container grid  grid-cols-1 sm:grid-cols-2   m-auto p-3">
                <div className="  w-full ">
                    <h4 className="text-4xl mt-4">{title}</h4>
                    <h4 className="text-4xl font-bold text-title">{subtitle}</h4>
                    <div className="leading-10 text-base mt-4">

                        <p>
                            El Colegio Particular Nuevo Horizonte de la ciudad de Juliaca, es una Institución Educativa que cuenta con los niveles de Inicial, Primaria y Secundaria, cuyo principio fundamental es la formación holística de nuestros estudiantes.
                        </p>
                        <p>
                            Es decir, no sólo nos preocupamos por los conocimientos altamente competitivos de nuestros estudiantes, sino que trabajamos de la mano con el arte, la ciencia, el deporte, el liderazgo y el emprendimiento; cultivando y fortaleciendo siempre los valores como eje fundamental del desarrollo humano.
                        </p>
                    </div>
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
                <div>
                    <img src="/Estudiante-1.png" alt="" />
                </div>


            </div>
        </div>
    )
}
