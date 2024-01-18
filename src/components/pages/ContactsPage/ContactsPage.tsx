import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./ContactsPage.module.css";
import { success } from "../../../utils/toast";


type FormType = {
  name: string;
  email: string;
  message: string;
};

export const ContactsPage = () => {

  const {register, handleSubmit, formState: { errors }, reset,} = useForm<FormType>();

  const submit: SubmitHandler<FormType> = (data) => {
    emailjs.send('service_tzvslyp', 'template_a2q7kts',{
      name: data.name,
      email: data.email,
      message: data.message
  }, 'VkrBgXkhbz9stdbea')
      .then((response) => {
        console.log('Email sent successfully:', response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
      success(),
    reset();
  };

  const error: SubmitErrorHandler<FormType> = () => {};

  const emailRegex =
    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;

  return (
    <div className={s.contactsPage_wrapper}>
      <form className={s.contactBlock} onSubmit={handleSubmit(submit, error)}>
        <h1 className={s.title}>CONTACTS</h1>
        <input autoComplete="off" type="text" placeholder="Your name..." {...register("name", { required: true })}
          className={errors.name ? s.contactPage_inputItemError : s.contactPage_inputItem}
        />
        <input autoComplete="off" type="email" placeholder="Your email..." {...register("email", { required: true, pattern: emailRegex })}
          className={errors.email ? s.contactPage_inputItemError : s.contactPage_inputItem}
        />
        <textarea
          rows={7}
          placeholder="Your message..."
          {...register("message", { required: true })}
          className={
            errors.message
              ? s.contactPage_textareaError
              : s.contactPage_textarea
          }
        />
        <input className={s.contactButton_submit} type="submit" />
      </form>
      <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  );
};
