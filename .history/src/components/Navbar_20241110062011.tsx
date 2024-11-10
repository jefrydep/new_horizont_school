"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react"; // Importamos useState para manejar el estado del menú
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navMenu = [
  { id: "1", path: "/", title: "Inicio" },
  { id: "2", path: "/newstudent", title: "Matrículas" },
  { id: "3", path: "/workshops", title: "Talleres" },
  { id: "4", path: "/academy", title: "Academia" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú hamburguesa

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alternamos el estado del menú
  };

  return (
    <div className="border-b sticky shadow py-2 px-4">
      <nav className="container font-bold flex justify-between items-center m-auto">
        {/* Logo y texto del colegio */}
        <div className="flex items-center">
          <div>
            <img src="/logo.jpg" alt="Logo" className="h-24" />
          </div>

          <div>
            <span>COLEGIO</span>
            <h2 className="text-title">NUEVO HORIZONTE</h2>
          </div>
        </div>

        {/* Menú de navegación en pantallas grandes */}
        <div className="hidden sm:flex gap-6 items-center text-secondary tracking-widest">
          {navMenu.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`${
                item.path === pathname ? "text-subtitle border-b-2" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}

          {/* Menú desplegable */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Acerca de</NavigationMenuTrigger>
                <NavigationMenuContent className="w-max px-2 py-4">
                  <Link href="/about" passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Quiénes Somos
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/vision" passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Visión y Misión
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/team" passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Nuestro Equipo
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/infrastructure" passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Infraestructura
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="text-white">SianNet</Button>
        </div>

        {/* Menú hamburguesa en pantallas pequeñas */}
        <div className="sm:hidden flex items-center">
          <Sheet>
            <SheetTrigger>
              {" "}
              <button onClick={toggleMenu} className="text-black">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
