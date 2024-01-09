import { SuperInput } from "../../input/SuperInput";
import s from "./ContactsPage.module.css";

export const ContactsPage = () => {
  return (
    <div className={s.contacts_page_wrapper}>
      <form action="" className={s.contact_block}>
        <h1 className={s.title}>CONTACTS</h1>
        <SuperInput placeholder="Your name..." />
        <SuperInput type="email" placeholder="Your email..." />
        <textarea
          className={s.contact_page_textarea}
          rows={7}
          placeholder="Your message..."
        ></textarea>
        <input className={s.contact_button_submit} type="submit" />
      </form>
    </div>
  );
};
