import { SubmitHandler, useForm } from "react-hook-form";
import { FormType } from "../Data/initialDataType";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { KEYS, schema } from "./helpers";
import emailjs from "@emailjs/browser";
import { errorMessage, successMessage } from "./utils";

export const useFormSubmit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({ resolver: yupResolver(schema) });

  const submit: SubmitHandler<FormType> = ({ name, email, message }) => {
    emailjs
      .send(
        KEYS.SERVICEKEY,
        KEYS.TEMPLATEKEY,
        {
          name,
          email,
          message,
        },
        KEYS.PUBLICKKEY
      )
      .then((response) => {
        successMessage();
        reset();
        console.log("Email sent successfully:", response.text);
      })
      .catch((error) => {
        errorMessage();
        console.error("Error sending email:", error);
      });
  };

  return { register, handleSubmit, errors, submit };
};
