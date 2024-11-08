
"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";


const navMenu = [
    {
        id: "1",
        path: "/",
        title: "Inicio"

    },
    {
        id: "2",
        path: "/about",
        title: "Nuestra Historia"

    },
    {
        id: "3",
        path: "/team",
        title: "Nuestro Equipo"

    },
    {
        id: "4",
        path: "/academy",
        title: "Academia"

    },
    {
        id: "5",
        path: "/infrastructure",
        title: "Infraestructura"

    },
]

export default function Navbar() {
    const pathname = usePathname()
    return (
        <div className="border-b sticky shadow   py-2 px-4">
            <nav className="container font-bold  flex justify-between items-center   m-auto">
                <div className="flex     items-center">
                    <div className="  ">
                        <img src="/logo.jpg" alt="" className="h-24" />
                    </div>

                    <div>
                        <span>
                            COLEGIO
                        </span>
                        <h2 className="text-title"> NUEVO HORIZONTE</h2>
                    </div>
                </div>
                <div className="  gap-6 items-center hidden sm:flex  text-secondary  tracking-widest">
                    {
                        navMenu.map(item => (


                            <Link className={`${item.path === pathname && "text-subtitle border-b-2"}`} key={item.id} href={item.path}>
                                {item.title}
                            </Link>

                        ))
                    }
                    {/* <Link href={"/about"}>
                        Nuestra Historia
                    </Link>
                    <Link href={"/team"}>
                        Nuestra  Equipo
                    </Link>
                    <Link href={"/academy"}>
                        Academia
                    </Link> */}
                    <Button className="text-white">
                        SianNet
                    </Button>
                </div>
            </nav>
        </div>
    )
}
