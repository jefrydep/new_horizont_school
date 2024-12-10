import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface Props {
    title: string;
    subtitle: string;
  }
  
  export default function PresentationCard({ title, subtitle }: Props) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10 p-6 bg-white shadow-lg rounded-lg">
          {/* Columna de texto */}
          <div className="w-full">
            <h4 className="text-4xl mt-4">{title}</h4>
            <h4 className="text-4xl font-bold text-title">{subtitle}</h4>
            <div className="leading-10 text-base mt-4">
              <p>
                El talento y la inteligencia de nuestros estudiantes y la alta
                preparación de nuestros docentes nos han hecho merecedores de los
                primeros lugares en premios de talla local, nacional. Ahora vamos
                por más... Rumbo a las Bodas de Plata.
              </p>
            </div>
  
            {/* Acordeón */}
            <div className="mt-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-title font-bold">
                    NIVEL PRIMARIA
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-8">
                    ¡Excelencia y dedicación en la formación del estudiante!
                    Preparamos a nuestros estudiantes para responder a las
                    exigencias de un mundo globalizado.
                  </AccordionContent>
                </AccordionItem>
  
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-title font-bold">
                    NIVEL SECUNDARIA
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-8">
                    ¡Calidad e innovación en una formación integral! Nuestra
                    finalidad fundamental es consolidar a través de un trabajo
                    especializado por áreas, un plan estructurado de las áreas
                    curriculares que está enfocado en el desarrollo de
                    competencias y proyectos científicos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
  
          {/* Columna de imagen */}
          <div className="flex justify-center">
            <img
              src="/matricula.png"
              alt="Matrícula"
              className="sm:h-[35rem] object-contain"
            />
          </div>
        </div>
      </div>
    );
  }
  