
export default function Footer() {
    return (
        <div className=" bg-title rounded-t-lg pb-2 ">
            <footer className="container m-auto ">
                <div className="grid p-4 sm:p-5  sm:grid-cols-3 gap-5">

                    <div>
                        <div className="text-subtitle flex justify-center sm:block font-bold">


                            <img src="/ISOLOGO.png" alt="Logo nuevo horizonte" className="h-24 sm:h-28" />

                        </div>
                        <span className="text-white font-bold tracking-widest">
                            Educación basada en  PROYECTOS
                        </span>
                        <hr />
                        <div>
                            <p className="text-justify mt-5 text-subtitle">
                                El talento y la inteligencia de nuestros alumnos y la alta preparación de nuestros profesores nos han hecho merecedores de los primeros lugares en premios de talla local, nacional. Ahora vamos por más...
                            </p>
                        </div>
                        <div>
                            <div className="text-white font-bold tracking-widest">


                                Ruc :
                            </div>
                            <div>
                                <span>20601184622</span>

                            </div>
                            <div className="text-white font-bold tracking-widest">


                                Ubicanos en :
                            </div>
                            <div>
                                <span>Jr. San Salvador N° 873</span>

                            </div>
                            <div className="text-white font-bold tracking-widest">


                                Teléfono :
                            </div>
                            <div>
                                <span>051-358250</span>

                            </div>
                            <div className="text-white font-bold tracking-widest">


                                WhatsApp :
                            </div>
                            <div>
                                <span>999070701</span>

                            </div>
                            <div className="text-white font-bold tracking-widest">


                                Correo :
                            </div>
                            <div>
                                <span> colegionuevohorizontejuliaca@gmail.com</span>

                            </div>

                        </div>
                    </div>

                    {/* <div>
                        <h6 className="text-subtitle font-bold">MAPA DEL SITIO</h6>

                    </div> */}
                    <div>
                        <h6 className="text-subtitle font-bold">HORARIO DE ATENCIÓN</h6>

                    </div>
                </div>
                <div className="text-center text-gray-100 text-xs mt-4" >
                    <span>
                        © 2025 Todos los derechos reservados. Design by jefrysoftdev@gmail.com
                    </span>
                </div>
            </footer>
        </div>
    )
}
