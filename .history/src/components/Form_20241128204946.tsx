"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Textarea } from "@/components/ui/textarea"

import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ContactForm: React.FC = () => {
  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    try {
      await emailjs.send(
        "service_ylr5l7x",
        "template_r33ljy7",
        values,
        "otiLUtXl2K09RKcCf"
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

    message: Yup.string().required("El mensaje es obligatorio"),
  });

  return (
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
          <Form className="flex flex-col gap-3 px-4">
            <div className="">
              <Field
                name="dni"
                placeholder="DNI"
                className="input"
                as={Input}
              />
              <ErrorMessage
                name="dni"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={Input}
                name="name"
                placeholder="Nombres"
                className="input"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={Input}
                name="lastname"
                placeholder="Apellidos"
                className="input"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={Input}
                name="cellphone"
                placeholder="Celular"
                className="input"
              />
              <ErrorMessage
                name="cellphone"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={Input}
                name="email"
                placeholder="Correo Electrónico"
                className="input"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                // as={Input}
                name="message"
                as={Textarea}
                // as="textarea"
                placeholder="Mensaje"
                className="input"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500"
              />
            </div>
            <Button type="submit">Enviar</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
