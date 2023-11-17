import { DataType } from "./initialDataType";
import JS from '../assets/js.svg'
import TS from '../assets/ts.svg'
import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg'
import REACT from '../assets/react.svg'
import REDUX from '../assets/redux.svg'
import PS from '../assets/ps.svg'



export const initialData: DataType = {
    homePage: {
        name: "Slava KAPSKIJ",
        subTitle: "Hi! I'm a front-end developer.",
    },
    skillPage: [
        {title: 'JavaScript', icon: JS},
        {title: 'TypeScript', icon: TS},
        {title: 'HTML', icon: HTML},
        {title: 'CSS', icon: CSS},
        {title: 'React', icon: REACT},
        {title: 'Redux', icon: REDUX},
        {title: 'PhotoShop', icon: PS},
    ]
}