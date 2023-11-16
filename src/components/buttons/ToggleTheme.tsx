import { FaRegMoon } from "react-icons/fa";
import s from './ToggleTheme.module.css'



export const ToggleTheme = () => {
    return (
        <button className={s.buttonTheme} onClick={() => { alert("theme Changed") }}>
            <FaRegMoon size='17px'/>
        </button>
    )
}