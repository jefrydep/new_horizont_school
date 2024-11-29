"use client"
import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: {
      dni: "",
      name: "",
      lastname: "",
      cellphone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      dni: Yup.string()
        .required("El DNI es obligatorio")
        .min(8, "El DNI debe tener al menos 8 caracteres"),
      name: Yup.string().required("El nombre es obligatorio"),
      lastname: Yup.string().required("El apellido es obligatorio"),
      cellphone: Yup.string()
        .required("El número de celular es obligatorio")
        .matches(/^[0-9]+$/, "El celular debe contener solo números"),
      email: Yup.string()
        .email("Correo inválido")
        .required("El correo electrónico es obligatorio"),
      message: Yup.string().required("El mensaje es obligatorio"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (form.current) {
        try {
          const result = await emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            form.current,
            "YOUR_PUBLIC_KEY"
          );
          console.log("Resultado de EmailJS:", result.text);
          alert("Mensaje enviado exitosamente");
          resetForm();
        } catch (error) {
          console.error("Error al enviar mensaje:", error);
          alert("Hubo un error al enviar el mensaje.");
        }
      }
    },
  });

  return (
    <div className="bg-gray-100 py-8">
      <div className="container pb-8 m-auto sm:w-[720px] shadow-2xl rounded-lg">
        <div className="py-4">
          <h5 className="font-bold mb-4 text-title text-5xl text-center">Contáctanos</h5>
          <h4 className="font-bold text-4xl text-center text-subtitle">Solicite Información</h4>
        </div>
        <form ref={form} onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-7 p-3">
            {/* Campos del formulario */}
            {/* ... mismos campos que antes */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-green-500 w-full sm:w-60 text-white"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
