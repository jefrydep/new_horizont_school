"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Form: React.FC = () => {
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
      try {
        const result = await emailjs.send(
          "service_iq1i7ff", // Reemplaza con tu Service ID
          "template_r33ljy7", // Reemplaza con tu Template ID
          values,
          "otiLUtXl2K09RKcCf" // Reemplaza con tu Public Key
        );
        alert("Mensaje enviado exitosamente");
        resetForm(); // Reinicia el formulario
      } catch (error) {
        console.error("Error al enviar mensaje:", error);
        alert("Hubo un error al enviar el mensaje.");
      }
    },
  });

  return (
    <div className="bg-gray-100 py-8">
      <div className="container pb-8 m-auto sm:w-[720px] shadow-2xl rounded-lg">
        <div className="py-4">
          <h5 className="font-bold mb-4 text-5xl text-center">Contáctanos</h5>
          <h4 className="font-bold text-4xl text-center">Solicite Información</h4>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-7 p-3">
            {/* Campo DNI */}
            <div>
              <Input
                placeholder="DNI"
                name="dni"
                value={formik.values.dni}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.touched.dni && formik.errors.dni ? "border-red-500" : ""}
              />
              {formik.touched.dni && formik.errors.dni && (
                <p className="text-red-500">{formik.errors.dni}</p>
              )}
            </div>

            {/* Campos Nombre y Apellido */}
            <div className="flex gap-6 flex-col sm:flex-row">
              <div>
                <Input
                  placeholder="Nombres"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.touched.name && formik.errors.name ? "border-red-500" : ""}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500">{formik.errors.name}</p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Apellidos"
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.touched.lastname && formik.errors.lastname ? "border-red-500" : ""}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <p className="text-red-500">{formik.errors.lastname}</p>
                )}
              </div>
            </div>

            {/* Campos Celular y Correo Electrónico */}
            <div className="flex gap-6 flex-col sm:flex-row">
              <div>
                <Input
                  placeholder="Celular"
                  name="cellphone"
                  value={formik.values.cellphone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.touched.cellphone && formik.errors.cellphone ? "border-red-500" : ""}
                />
                {formik.touched.cellphone && formik.errors.cellphone && (
                  <p className="text-red-500">{formik.errors.cellphone}</p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Correo Electrónico"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.touched.email && formik.errors.email ? "border-red-500" : ""}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}
              </div>
            </div>

            {/* Campo Mensaje */}
            <div>
              <textarea
                placeholder="Mensaje"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 border rounded ${
                  formik.touched.message && formik.errors.message ? "border-red-500" : ""
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500">{formik.errors.message}</p>
              )}
            </div>

            {/* Botón Enviar */}
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
