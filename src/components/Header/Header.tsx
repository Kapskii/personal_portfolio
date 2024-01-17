import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { AiOutlineProfile } from "react-icons/ai";
import { GrCube } from "react-icons/gr";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { RiCodeSSlashLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";



export const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <nav className={s.container}>
                <NavLink to='home' className={s.title}>
                    <RiCodeSSlashLine size='23px' />
                    Slava KAPSKIJ
                </NavLink>
                <div className={s.navigation}>
                    <NavLink to='skills' className={s.navItem}>
                        <span className={s.item}>
                            <AiOutlineProfile />
                            Skills
                        </span>
                    </NavLink>
                    <NavLink to='projects' className={s.navItem}>
                        <span className={s.item}>
                            <GrCube />
                            Projects
                        </span>
                    </NavLink>
                    <NavLink to='experiance' className={s.navItem}>
                        <span className={s.item}>
                            <HiOutlineSquaresPlus />
                            Experiances
                        </span>
                    </NavLink>
                    <NavLink to='contacts' className={s.navItem}>
                        <span className={s.item}>
                            <TiContacts />
                            Contacts
                        </span>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}