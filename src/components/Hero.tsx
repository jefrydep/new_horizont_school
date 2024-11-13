import { Button } from "./ui/button";

interface Props {
    title: string,
    subtitle: string;
    year?: string;
    img?: string;
}

export default function Hero({ title, subtitle, year, img }: Props) {
    return (
        <div>
            <section className="container m-auto">
                <div className="hidden sm:flex justify-center w-full font-bold sm:w-min px-2 py-2 tracking-wider rounded gap-4 mt-5 bg-subtitle">
                    <span>Inicial</span>
                    <span>Primaria</span>
                    <span>Secundaria</span>
                </div>

                {/* Contenedor con la imagen, texto y botones */}
                <div className="   h-[calc(100vh-140px)] flex flex-col sm:flex-row pt-24   sm:pt-40 relative">

                    <div className="   flex flex-col items-center sm:w-[50%] text-center px-4">
                        <h1 className="text-4xl sm:text-6xl font-bold text-[#fbcc07] tracking-wider">
                            {title}
                            <br />
                            <div>
                                <span className="text-primary">{subtitle}</span>
                                <span className="text-[#73060c] ml-6">{year}</span>
                            </div>
                        </h1>

                        <div className="flex justify-center z-50 text-white font-bold gap-4 mt-6">
                            <Button className="rounded-3xl">
                                <a href="https://wa.me/+51958205138?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A" target="_blank">
                                    Contáctenos
                                </a>
                            </Button>
                            <Button className="bg-green-500 rounded-3xl">
                                <a href="https://wa.me/+51958205138?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A" target="_blank">
                                    Escribanos por WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div className="sm:w-[50%] z-40">
                        <img
                            src={img ? img : '/banner-principal.png'}
                            alt="Imagen principal"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="absolute bottom-0 sm:hidden w-full h-24">
                        <svg
                            className="absolute bottom-0 left-0 w-full"
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0.00,49.98 C149.54,170.23 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                                fill="#73060C" // Color de la ola (puedes usar cualquier color)
                            ></path>
                        </svg>
                    </div>
                </div>

                {/* La ola (wave) en la parte inferior */}
            </section>
            <div className="relative hidden sm:block  w-full h-24">
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0.00,49.98 C149.54,170.23 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        fill="#73060C" // Color de la ola (puedes usar cualquier color)
                    ></path>
                </svg>
            </div>
        </div>
    );
}
