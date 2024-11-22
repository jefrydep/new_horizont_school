import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import { Lato } from 'next/font/google'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "COLEGIO INTERNACIONAL NUEVO HORIZONTE",
  description: "el mejor colegio de JULIACA,Colegio internacional nuevo horizonte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body
        className={` ${lato.className} antialiased `}
      >

        <div className="">
          <Navbar />
        </div>
        <main className="   ">

          {children}
          <div className="flex flex-col fixed  bottom-2     z-50   sm:top-1/2  gap-2">
            <a href="https://wa.me/+51999070701?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A" target="_blank">
              {/* Solicitar información */}
              <img src="/whatsapp.png" alt="" className=" animate-bounce h-11  sm:h-16" />
            </a>

            <a href="https://www.tiktok.com/@colegionuevohorizonte" target="_blank">
              {/* Solicitar información */}
              <img src="/tik-tok.png" alt="" className=" animate-bounce h-11  sm:h-16 " />
            </a>
            <a href="https://www.facebook.com/internuevohorizonte  " target="_blank">
              {/* Solicitar información */}
              <img src="/facebook.png" alt="" className=" animate-bounce h-11  sm:h-16 " />
            </a>
            <a href="https://www.instagram.com/colegionuevohorizonte" target="_blank">
              {/* Solicitar información */}
              <img src="/instagram.png" alt="" className=" animate-bounce h-11  sm:h-16" />
            </a>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
