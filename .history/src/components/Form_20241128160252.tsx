"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";

const ContactForm: React.FC = () => {
  const handleSubmit = async (values: any, { resetForm }: { resetForm: () => void }) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID", 
        values,
        "YOUR_PUBLIC_KEY"
      );
      alert("Mensaje enviado exitosamente");
      resetForm();
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      alert("Hubo un error al enviar el mensaje.");
    }
  };

  const validationSchema = Yup.object({
    dni: Yup.string().required("El DNI es obligatorio"),
    name: Yup.string().required("El nombre es obligatorio"),
    lastname: Yup.string().required("El apellido es obligatorio"),
    cellphone: Yup.string().required("El número de celular es obligatorio"),
    email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
    message: Yup.string().required("El mensaje es obligatorio"),
  });

  return (
    <div className="container">
      <Formik
        initialValues={{
          dni: "",
          name: "",
          lastname: "",
          cellphone: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field name="dni" placeholder="DNI" className="input" />
            <ErrorMessage name="dni" component="div" className="text-red-500" />
          </div>
          <div>
            <Field name="name" placeholder="Nombres" className="input" />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>
          <div>
            <Field name="lastname" placeholder="Apellidos" className="input" />
            <ErrorMessage name="lastname" component="div" className="text-red-500" />
          </div>
          <div>
            <Field name="cellphone" placeholder="Celular" className="input" />
            <ErrorMessage name="cellphone" component="div" className="text-red-500" />
          </div>
          <div>
            <Field name="email" placeholder="Correo Electrónico" className="input" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <div>
            <Field name="message" as="textarea" placeholder="Mensaje" className="input" />
            <ErrorMessage name="message" component="div" className="text-red-500" />
          </div>
          <Button type="submit">Enviar</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
