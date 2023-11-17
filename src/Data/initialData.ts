import { DataType } from "./initialDataType";
import JS from '../assets/skills/js.svg'
import TS from '../assets/skills/ts.svg'
import HTML from '../assets/skills/html.svg'
import CSS from '../assets/skills/css.svg'
import REACT from '../assets/skills/react.svg'
import REDUX from '../assets/skills/redux.svg'
import PS from '../assets/skills/ps.svg'
import GH from '../assets/skills/github.svg'
import JST from '../assets/tech/js.svg'
import TST from '../assets/tech/ts.svg'
import HTMLT from '../assets/tech/html.svg'
import REACTT from '../assets/tech/react.svg'
import REDUXT from '../assets/tech/redux.svg'


export const initialData: DataType = {
    homePage: {
        name: "Slava KAPSKIJ",
        subTitle: "Hi! I'm a front-end developer.",
    },
    skillPage: [
        { title: 'JavaScript', icon: JS },
        { title: 'TypeScript', icon: TS },
        { title: 'HTML', icon: HTML },
        { title: 'CSS', icon: CSS },
        { title: 'React', icon: REACT },
        { title: 'Redux', icon: REDUX },
        { title: 'PhotoShop', icon: PS },
        { title: 'GitHub', icon: GH },
    ],
    projectPage: [
    {title: "Social Network", tech: [JST, TST, HTMLT, REACTT, REDUXT]},
]
}