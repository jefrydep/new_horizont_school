import { Button } from "./ui/button";

interface Props {
    title: string,
    subtitle: string;
    year?: string;
    img?: string
}

export default function Hero({ title, subtitle, year, img }: Props) {
    return (
        <div>

            <section className="container m-auto" >
                <div className=" hidden sm:flex justify-center  w-full font-bold sm:w-min px-2 py-2 tracking-wider rounded gap-4 mt-5 bg-subtitle">
                    <span>Inicial</span>
                    <span>Primaria</span>
                    <span>secundaria</span>
                </div>
                <div className="h-[30vh]   flex flex-col sm:flex-row justify-center items-center">

                    <div className="   ">
                        <h1 className="text-4xl sm:text-6xl text-center flex font-bold flex-col tracking-wider gap-10 text-[#fbcc07]  " >

                            {
                                title
                            }
                            <br />
                            <div>

                                <span className="text-primary">

                                    {subtitle}
                                </span>
                                <span className="text-[#73060c] ml-6">
                                    {year}
                                </span>
                            </div>
                        </h1>

                        <div className="flex justify-center text-white font-bold gap-4 mt-6">
                            <Button className="rounded-3xl">
                                <a href="https://wa.me/+51958205138?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A" target="_blank">

                                    Contáctecnos
                                </a>
                            </Button>
                            <Button className="bg-green-500 rounded-3xl">
                                <a href="https://wa.me/+51958205138?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A" target="_blank">

                                    Escribanos por WhatsApp
                                </a>
                            </Button>
                        </div>

                    </div>
                    <div>
                        <img
                            src={img ? img : '/banner-principal.png'}
                            alt="Imagen principal"
                        />
                    </div>
                    <div className="w-full  h-40 relative">
                        <svg
                            className="absolute bottom-0 left-0 w-full"
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                        >
                            {/* Aquí usamos el color de Tailwind directamente en el atributo fill */}
                            <path
                                d="M0.00,49.98 C149.54,170.23 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                                fill="#ff0000" // Puedes usar cualquier color de Tailwind aquí
                            ></path>
                        </svg>
                    </div>
                </div>

            </section>
        </div>
    )
}
