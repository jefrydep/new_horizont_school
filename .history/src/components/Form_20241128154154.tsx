"use client";
import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Form() {


    onSubmit: async (values, { resetForm }) => {
        try {
          const result = await emailjs.send(
            "YOUR_SERVICE_ID", // Reemplaza con tu Service ID
            "YOUR_TEMPLATE_ID", // Reemplaza con tu Template ID
            values,
            "YOUR_PUBLIC_KEY" // Reemplaza con tu Public Key
          );
          alert("Mensaje enviado exitosamente");
          resetForm(); // Reinicia el formulario
        } catch (error) {
          console.error("Error al enviar mensaje:", error);
          alert("Hubo un error al enviar el mensaje.");
        }
      },
  return (
    // <div className="bg-[#73060c]">
    <div className="bg-gray-100  py-8">
      <div className="container pb-8 m-auto sm:w-[720px] shadow-2xl rounded-lg">
        <div className="py-4">
          <h5 className="font-bold mb-4  text-title  text-5xl text-center">
            Contáctanos
          </h5>
          <h4 className="font-bold text-4xl text-center text-subtitle">
            Solicite Información
          </h4>
        </div>
        <Formik
        onSubmit={}
          initialValues={{
            dni: "",
            name: "",
            lastname: "",
            cellphone: "",
            email: "",
            message: "",
          }}
        >
          <Form>
            <div className="flex flex-col gap-7 p-3 ">
              <div>
                <Input placeholder="Dni" />
              </div>
              <div className="flex gap-6 flex-col sm:flex-row">
                <Input placeholder="Nombres" />
                <Input placeholder="Apellidos" />
              </div>

              <div className="flex gap-6 flex-col sm:flex-row">
                <Input placeholder="Celular  " />
                <Input placeholder="Correo Electrónico  " />
              </div>
              <div className="flex justify-center">
                <Button className=" bg-green-500  w-full  sm:w-60  text-white">
                  Enviar
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
