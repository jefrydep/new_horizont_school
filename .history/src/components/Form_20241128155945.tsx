"use client";
import { Field, Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Form() {
  // const validadat Yup.object({
  //   dni: Yup.string()
  //     .required("El DNI es obligatorio")
  //     .min(8, "El DNI debe tener al menos 8 caracteres"),
  //   name: Yup.string().required("El nombre es obligatorio"),
  //   lastname: Yup.string().required("El apellido es obligatorio"),
  //   cellphone: Yup.string()
  //     .required("El número de celular es obligatorio")
  //     .matches(/^[0-9]+$/, "El celular debe contener solo números"),
  //   email: Yup.string()
  //     .email("Correo inválido")
  //     .required("El correo electrónico es obligatorio"),
  //   message: Yup.string().required("El mensaje es obligatorio"),
  // });
  const sendEmail = async (values: any) => {
    try {
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Reemplaza con tu Service ID
        "YOUR_TEMPLATE_ID", // Reemplaza con tu Template ID
        {
          name: values.name,
          lastname: values.lastname,
          dni: values.dni,
          cellphone: values.cellphone,
          email: values.email,
          message: values.message,
        },
        "YOUR_PUBLIC_KEY" // Reemplaza con tu Public Key
      );
      console.log("Mensaje enviado:", result.text);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };

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
          validationSchema={}
          onSubmit={sendEmail}
          initialValues={{
            dni: "",
            name: "",
            lastname: "",
            cellphone: "",
            email: "",
            message: "",
          }}
        >
          <Form/>
            <div className="flex flex-col gap-7 p-3 ">
              <div>
                <Field placeholder="Dni" />
              </div>
              <div className="flex gap-6 flex-col sm:flex-row">
                <Field placeholder="Nombres" />
                <Field placeholder="Apellidos" />
              </div>

              <div className="flex gap-6 flex-col sm:flex-row">
                <Field placeholder="Celular  " />
                <Field placeholder="Correo Electrónico  " />
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
