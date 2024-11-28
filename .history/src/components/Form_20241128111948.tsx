import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Form() {
    return (
        // <div className="bg-[#73060c]">
        <div className="bg-gray-100  py-3">
            <div className="container pb-8 m-auto sm:w-[720px] shadow-2xl">
                <div className="py-4">
                    <h5 className="font-bold mb-4  text-title  text-5xl text-center">Contáctanos</h5>
                    <h4 className="font-bold text-4xl text-center text-subtitle">Solicite Información</h4>
                </div>
                <form action="" >


                    <div className="flex flex-col gap-7 p-3 ">
                        <div>

                            <Input placeholder="Dni" />
                        </div>
                        <div className="flex gap-6">

                            <Input placeholder="Nombres" />
                            <Input placeholder="Apellidos" />
                        </div>

                        <div className="flex gap-6">

                            <Input placeholder="Celular  " />
                            <Input placeholder="Correo Electrónico  " />
                        </div>
                        <div>
                            <Button className=" bg-green-500"  >
                                Enviar
                            </Button>
                        </div>
                    </div>
                </form>




            </div>

        </div>
    )
}
