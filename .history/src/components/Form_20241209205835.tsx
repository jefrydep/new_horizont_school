"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Textarea } from "@/components/ui/textarea";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface valuesForm {
  dni: string;
  name: string;
  lastname: string;
  cellphone: string;
  message: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const handleSubmit = async (
    values: valuesForm,
    { resetForm }: { resetForm: () => void }
  ) => {
    const formattedValues = { ...values };

    try {
      await emailjs.send(
        "service_ylr5l7x",
        "template_r33ljy7",
        formattedValues,
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
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),
    message: Yup.string().required("El mensaje es obligatorio"),
  });

  return (
    <div className="bg-gray-50 min-h-screen py-16 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full sm:w-[720px]">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Contáctanos</h1>
          <p className="text-lg text-gray-600 mt-2">
            ¡Estamos aquí para ayudarte con la matrícula 2025!
          </p>
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
          <Form className="space-y-6">
            <div>
              <label
                htmlFor="dni"
                className="block text-sm font-medium text-gray-700"
              >
                DNI
              </label>
              <Field
                id="dni"
                name="dni"
                placeholder="12345678"
                className="mt-1 input"
                as={Input}
              />
              <ErrorMessage
                name="dni"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Juan"
                className="mt-1 input"
                as={Input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Apellido
              </label>
              <Field
                id="lastname"
                name="lastname"
                placeholder="Pérez"
                className="mt-1 input"
                as={Input}
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="cellphone"
                className="block text-sm font-medium text-gray-700"
              >
                Celular
              </label>
              <Field
                id="cellphone"
                name="cellphone"
                placeholder="987654321"
                className="mt-1 input"
                as={Input}
              />
              <ErrorMessage
                name="cellphone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <Field
                id="email"
                name="email"
                placeholder="correo@ejemplo.com"
                className="mt-1 input"
                as={Input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <Field
                id="message"
                name="message"
                placeholder="Escribe tu mensaje..."
                className="mt-1 input"
                as={Textarea}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold"
              >
                Enviar
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
