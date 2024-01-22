import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./ContactsPage.module.css";
import { useFormSubmit } from "../../../utils/formSubmit";


export const ContactsPage = () => {

  const { register, handleSubmit, errors, submit } = useFormSubmit();


  return (
    <div className={s.contactsPage_wrapper}>
      <form className={s.contactBlock} onSubmit={handleSubmit(submit)}>
        <h1 className={s.title}>CONTACTS</h1>
        <input autoComplete="off" type="text" placeholder="Your name..." {...register("name")}
          className={errors.name ? s.contactPage_inputItemError : s.contactPage_inputItem}
        />
        <input autoComplete="off" type="email" placeholder="Your email..." {...register("email")}
          className={errors.email ? s.contactPage_inputItemError : s.contactPage_inputItem}
        />
        <textarea
          rows={7}
          placeholder="Your message..."
          {...register("message")}
          className={
            errors.message
              ? s.contactPage_textareaError
              : s.contactPage_textarea
          }
        />
        <input className={s.contactButton_submit} type='submit'/>
        
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