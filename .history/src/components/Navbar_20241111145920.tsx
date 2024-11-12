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

const navMenu = [
  { id: "1", path: "/", title: "Inicio" },
  { id: "2", path: "/newstudent", title: "Matrículas" },
  { id: "3", path: "/workshops", title: "Talleres" },
  { id: "4", path: "/academy", title: "Academia" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="       bg-title  px-4">
      <nav className="container font-bold rounded-t-3xl  border-b-2 sticky top-8 bg-white flex justify-between items-center m-auto">
        {/* Logo y texto del colegio */}
        <div className="flex items-center">
          
          <div>
            <img src="/logo.jpg" alt="Logo" className="h-24" />
          </div>

          <div>
            <span>COLEGIO INTERNACIONAL</span>
            <h2 className="text-title">NUEVO HORIZONTE</h2>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center  ">
            <div className="w-[84px]   h-[80px] bg-subtitle"></div>

            <div className="w-0 h-0 border-l-[42px] border-l-transparent border-r-[42px] border-r-transparent border-t-[55px] border-subtitle"></div>
          </div>
        </div>
        {/* <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-blue-500"></div> */}

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

          <Button className="text-white">SianNet</Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className=" mr-2 sm:hidden">
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
              <SheetTitle className="text-title">
                Colegio Internacional NUEVO HORIZONTE
              </SheetTitle>
              {/* <SheetDescription>
                El talento y la inteligencia de nuestros alumnos y la alta preparación de nuestros profesores nos han hecho merecedores de los primeros lugares en premios de talla local, nacional. Ahora vamos por más...
              </SheetDescription> */}
            </SheetHeader>
            <hr className="border-title" />
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
                    <NavigationMenuContent className="w-max flex flex-col px-2 py-4">
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

              <Button className="text-white">SianNet</Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Menú hamburguesa en pantallas pequeñas */}
      </nav>

      {/* Menú desplegable en móviles */}
    </div>
  );
}
