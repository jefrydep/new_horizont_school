import { Button } from "./ui/button";

interface Props {
    title: string,
    subtitle: string;
    year?: string;
}

export default function Hero({ title, subtitle, year }: Props) {
    return (
        <section className="container m-auto" >
            <div className=" flex w-min px-2 py-2 rounded gap-4 mt-5 bg-purple-200">
                <span>Inicial</span>
                <span>Primaria</span>
                <span>secundaria</span>
            </div>
            <div className="h-[85vh]   flex flex-col sm:flex-row justify-center items-center">

                <div className=" ">
                    <h1 className="text-6xl flex font-bold flex-col gap-10 text-[#fbcc07]  " >

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

                    <div className="flex gap-4 mt-6">
                        <Button className="rounded-3xl">
                            Contáctecnos
                        </Button>
                        <Button className="bg-green-500 rounded-3xl">
                            Escribanos por WhatsApp
                        </Button>
                    </div>

                </div>
                <div>
                    <img src="/banner-principal.png" alt="" />
                </div>
            </div>
        </section>
    )
}
