
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
        <div className="border-b sticky    py-2 px-4">
            <nav className="container font-bold  flex justify-between items-center   m-auto">
                <div>
                    <div className="">
                        LOGO
                    </div>
                </div>
                <div className="flex gap-6 items-center  text-secondary ">
                    {
                        navMenu.map(item => (


                            <Link className={`${item.path === pathname && "text-red-500"}`} key={item.id}  href={item.path}>
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
                    <Button>
                        SianNet
                    </Button>
                </div>
            </nav>
        </div>
    )
}
