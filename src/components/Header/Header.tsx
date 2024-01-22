import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { AiOutlineProfile } from "react-icons/ai";
import { GrCube } from "react-icons/gr";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { RiCodeSSlashLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { useState } from "react";
import { ReactComponent as Icon } from "../../assets/burger.svg";

export const Header = () => {
  const [isOpen, setOpen] = useState(false); 

  return (
    <div className={s.headerWrapper}>
      <NavLink onClick={() => setOpen(!isOpen)} to="home" className={s.header_logoItem}>
        <RiCodeSSlashLine size="23px" />
        Slava KAPSKIJ
      </NavLink>
      <nav className={isOpen ? s.header_navActive : s.header_nav}>
        <ul className={s.header_navList}>
          <NavLink onClick={() => setOpen(!isOpen)} to="skills" className={s.header_navItem}>
            <span className={s.item}>
              <AiOutlineProfile />
              Skills
            </span>
          </NavLink>
          <NavLink onClick={() => setOpen(!isOpen)} to="projects" className={s.header_navItem}>
            <span className={s.item}>
              <GrCube />
              Projects
            </span>
          </NavLink>
          <NavLink onClick={() => setOpen(!isOpen)} to="experiance" className={s.header_navItem}>
            <span className={s.item}>
              <HiOutlineSquaresPlus />
              Experiances
            </span>
          </NavLink>
          <NavLink onClick={() => setOpen(!isOpen)} to="contacts" className={s.header_navItem}>
            <span className={s.item}>
              <TiContacts />
              Contacts
            </span>
          </NavLink>
        </ul>
      </nav>
      <button className={s.header_menuButton} onClick={() => setOpen(!isOpen)}>
        <Icon />
      </button>
    </div>
  );
};
