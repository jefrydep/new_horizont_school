"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
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
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FileCheck, GraduationCapIcon } from "lucide-react";

const navMenu = [
  { id: "1", path: "/", title: "Inicio" },
  { id: "2", path: "/newstudent/", title: "Matrículas" },
  { id: "3", path: "/vacation/", title: "Ciclo Vacacional 2025" },
  // { id: "4", path: "/workshops", title: "Talleres" },
  // { id: "5", path: "/academy", title: "Academia" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="  border  z-50  shadow-sm  w-full  fixed bg-white       ">
      <div className="bg-title  px-2 sm:px-4 sm:py-2 w-full ">
        <div className=" flex gap-2 sm:gap-5  justify-center items-center  ">
          <div className="text-white font-bold bg-subtitle px-2 py-1 rounded-t-lg">
            ADMISIÓN
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm ">
            <p className=" font-semibold sm:font-bold   sm:tracking-widest text-white">
              50% DE DESCUENTO{" "}
            </p>
            <span className="hidden sm:block text-subtitle  ">
              en inscripción para estudiante nuevos,
            </span>
            <span className="font-semibold   underline text-white">
              <a
                href="https://wa.me/+51999070701?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A"
                target="_blank"
              >
                Solicitar información
              </a>
            </span>
          </div>
        </div>
      </div>
      <nav className="container font-bold     sticky top-8   flex justify-between items-center m-auto">
        {/* Logo y texto del colegio */}
        <div className="flex items-center">
          <div className=" ">
            <img
              src="/ISOLOGO.png"
              alt="Logo nuevo horizonte"
              className="h-24 sm:h-28"
            />
          </div>
          <div className="flex flex-col text-sm sm:text-base">
            COLEGIO INTERNACIONAL{" "}
            <span className="text-title">NUEVO HORIZONTE</span>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-col items-center  ">
            <div className=" w-[84px] h-[40px]  sm:h-[80px] bg-title"></div>

            <div className="w-0 h-0 border-l-[42px] border-l-transparent border-r-[42px] border-r-transparent border-t-[55px] border-title"></div>
          </div>
        </div>
        {/* <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-blue-500"></div> */}

        {/* Menú de navegación en pantallas grandes */}

        <div className="hidden sm:flex gap-6 items-center text-secondary tracking-widest">
          {navMenu.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`hover:text-title ${
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
                  {/* <Link href="/about"  passHref> */}
                  <NavigationMenuLink
                    href="/about/"
                    className={navigationMenuTriggerStyle()}
                  >
                    Quiénes Somos
                  </NavigationMenuLink>
                  {/* </Link> */}
                  {/* <Link href="/vision" passHref> */}
                  <NavigationMenuLink
                    href="/vision"
                    className={navigationMenuTriggerStyle()}
                  >
                    Visión y Misión
                  </NavigationMenuLink>
                  {/* </Link> */}
                  {/* <Link href="/team" passHref> */}
                  <NavigationMenuLink
                    href="/team"
                    className={navigationMenuTriggerStyle()}
                  >
                    Nuestro Equipo
                  </NavigationMenuLink>
                  {/* </Link> */}

                  {/* <Link href="/infrastructure" passHref> */}
                  <NavigationMenuLink
                    href="/infrastructure"
                    className={navigationMenuTriggerStyle()}
                  >
                    Infraestructura
                  </NavigationMenuLink>
                  {/* </Link> */}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="text-white  mr-4 bg-title hover:bg-[#bd3c40e8]  ">
            <a
              target="_blank"
              className="flex gap-3"
              href="https://www.peruschool.com.pe/NHJuliaca"
            >
              <GraduationCapIcon /> PerúSchool
            </a>
          </Button>
        </div>
        <div className="   flex-col flex gap-2 py-2 ">
          <div className="sm:flex gap-2 border  hidden rounded-md px-4 ">
            <div className="text-title">
              <FileCheck />
            </div>
            <a href="/boletin.pdf" target="_blank">
              Boletín Informativo 2025
            </a>
          </div>
          <div className="sm:flex gap-2 border  hidden rounded-md px-4 ">
            <div className="text-title">
              <FileCheck />
            </div>
            <a href="/boletin.pdf" target="_blank">
               Reglamento Interno
            </a>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild className=" mr-2 sm:hidden rounded-md">
            <svg
              className="w-10 h-10"
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
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-title ">
                <div className="  flex justify-center">
                  <img src="/ISOLOGO.png" alt="Logo" className="h-36" />
                </div>
              </SheetTitle>
              {/* <SheetDescription>
                El talento y la inteligencia de nuestros alumnos y la alta preparación de nuestros profesores nos han hecho merecedores de los primeros lugares en premios de talla local, nacional. Ahora vamos por más...
              </SheetDescription> */}
            </SheetHeader>
            <hr className="border-title mb-5" />
            <div className="flex gap-2  text-center mb-5 ">
              <div className="text-title">
                <FileCheck />
              </div>
              <a href="/boletin.pdf" target="_blank">
                Boletín Informativo 2025
              </a>
            </div>
            <div className=" flex flex-col   gap-6 items-center text-secondary tracking-widest">
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

              {/* Menú desplegable  en moviles*/}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Acerca de</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-max flex   flex-col px-2 py-4">
                      {/* <Link href="/about"  passHref> */}
                      <NavigationMenuLink
                        href="/about"
                        className={navigationMenuTriggerStyle()}
                      >
                        Quiénes Somos
                      </NavigationMenuLink>
                      {/* </Link> */}
                      {/* <Link href="/vision" passHref> */}
                      <NavigationMenuLink
                        href="/vision"
                        className={navigationMenuTriggerStyle()}
                      >
                        Visión y Misión
                      </NavigationMenuLink>
                      {/* </Link> */}
                      {/* <Link href="/team" passHref> */}
                      <NavigationMenuLink
                        href="/team"
                        className={navigationMenuTriggerStyle()}
                      >
                        Nuestro Equipo
                      </NavigationMenuLink>
                      {/* </Link> */}

                      {/* <Link href="/infrastructure" passHref> */}
                      <NavigationMenuLink
                        href="/infrastructure"
                        className={navigationMenuTriggerStyle()}
                      >
                        Infraestructura
                      </NavigationMenuLink>
                      {/* </Link> */}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button className="text-white  mr-4 bg-title ">
                <a
                  target="_blank"
                  className="flex gap-3"
                  href="https://www.peruschool.com.pe/NHJuliaca"
                >
                  <GraduationCapIcon /> PerúSchool
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Menú hamburguesa en pantallas pequeñas */}
      </nav>

      {/* Menú desplegable en móviles */}
    </div>
  );
}
