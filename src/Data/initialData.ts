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
import CSST from '../assets/tech/css.svg'
import MUIT from '../assets/tech/material-ui.svg'
import SASST from '../assets/tech/sass.svg'
import LEARN from '../assets/experiance/learning.svg'
import LEARN1 from '../assets/experiance/learning1.svg'
import LEARN2 from '../assets/experiance/learning2.svg'
import WORK from '../assets/experiance/work.svg'


export const initialData: DataType = {
    homePage: {
        name: "Slava",
        surname: "Kapskii",
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
        {
            title: "Social Network",
            tech: [JST, TST, HTMLT, CSST, REACTT, REDUXT],
            description: 'In this project I am creating a social network with the ability to register and profile settings.',
            linkGit: 'https://github.com/Kapskii/Social-network',
            linkLive: 'https://kapskii.github.io/Social-network/#/profile'
        },
        {
            title: "PhotoStudio Template",
            tech: [JST, HTMLT, CSST],
            description: 'A neat template for photographers. Functional and concise. Adapted for mobile devices.',
            linkGit: 'https://github.com/Kapskii/photo_website',
            linkLive: 'https://kapskii.github.io/photo_website/'
        },
        {
            title: "TODOLIST",
            tech: [JST, TST, HTMLT, REACTT, MUIT],
            description: 'Helps you plan your tasks. With the ability to break large tasks into smaller subtasks. There is adding, deleting and sorting.',
            linkGit: 'https://github.com/Kapskii/newTodolist',
            linkLive: 'https://kapskii.github.io/newTodolist/'
        },
        {
            title: "COFFEE-HOUSE",
            tech: [JST, HTMLT, CSST],
            description: 'Adaptive website for a coffee shop with the ability to calculate the cost of selected goods, as well as adding an unlimited number of products and product categories..',
            linkGit: 'https://github.com/Kapskii/coffee-house-web',
            linkLive: 'https://kapskii.github.io/coffee-house-web/'
        },
    ],
    experiancePage: [
        {
            logo: WORK,
            title: "Front-end Developer (Project Works)",
            description: "Freelance",
            duration: "September 2023 - present",
            stack: [JST, TST, HTMLT, CSST, SASST, GH, REACTT, REDUXT ]
        },
        {
            logo: LEARN2,
            title: "Rolling Scopes school (Stage 1, Stage 2)",
            description: "In-depth study of javascript, html, css. Also study of preprocessors such as SASS. Creating more complex websites. Working with GitHub.",
            duration: "November 2023 - present",
            stack: [JST, HTMLT, CSST, SASST, GH]
        },
        {
            logo: LEARN1,
            title: "IT-Incubator (Stage 0)",
            description: "Repetition and consolidation of basic knowledge of JS, CSS, HTML. Creation of a simple project (landing page).",
            duration: "September 2023 - November 2023",
            stack: [JST, HTMLT, CSST]
        },
        {
            logo: LEARN,
            title: "Self-Learning",
            description: "Creating simple adaptive websites on pure JS, HTML, CSS. Creating projects with the React library, using TypeScript.",
            duration: "June 2023 - November 2023",
            stack: [JST, HTMLT, CSST, REACTT, TST]
        },
    ]
}