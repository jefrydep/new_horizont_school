import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "COLEGIO INTERNACIONAL NUEVO HORIZONTE",
  description: "el mejor colegio de JULIACA,Colegio internacional nuevo horizonte",
  icons:"/logo.jpg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="bg-title  px-2 sm:px-4 sm:py-2 w-full ">
          <div className=" flex gap-2 sm:gap-5 container justify-center items-center m-auto">
            <div className="text-white font-bold bg-subtitle px-2 py-1 rounded-t-lg">

              ADMISIÓN
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm ">
              <p className=" font-semibold sm:font-bold   sm:tracking-widest text-white">50% DE DESCUENTO </p>
              <span className="hidden sm:block text-subtitle  " >en inscripción para estudiante nuevos,</span>
              <span className="font-semibold   underline text-white">
                <a href="https://wa.me/+51999070701?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A" target="_blank">
                  Solicitar información
                </a>


              </span>
            </div>
          </div>
        </div>
        <div>
          <Navbar />
        </div>
        <main className="   ">

          {children}
          <div>
            <a href="https://wa.me/+51999070701?text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20matr%C3%ADcula,%20requisitos%20y%20fechas%20importantes.%20Agradecer%C3%ADa%20su%20orientaci%C3%B3n%20para%20poder%20completar%20mi%20inscripci%C3%B3n%20de%20manera%20adecuada.%0A%0AQuedo%20atento%20a%20su%20respuesta.%0A%0ASaludos%20cordiales,%0A" target="_blank">
              {/* Solicitar información */}
              <img src="/icons/whatsapp.svg" alt="" className="fixed h-20 bottom-4 sm:top-1/2 animate-bounce " />
            </a>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
