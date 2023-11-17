import { SuperInput } from '../../input/SuperInput'
import s from './ProjectsPage.module.css'
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import { ProjectsPageType } from '../../../Data/initialDataType';
import { LiaExternalLinkAltSolid } from "react-icons/lia";


type PropsType = {
    projectData: ProjectsPageType[]
}


export const ProjectsPage = (props: PropsType) => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>PROJECTS</h1>
            <div className={s.projectsItemWrapper}>
                <SuperInput />
                <div className={s.projectsWrapper}>
                    <div className={s.project}>
                        <div className={s.titleWrapper}>
                            <h3 className={s.titleProject}>{props.projectData[0].title}</h3>
                            <a className={s.projectLink}
                                href="https://github.com/Kapskii/Social-network" target='_blank' rel="noreferrer">
                                <FaGithubSquare size={30} color='#fff' />
                            </a>
                        </div>
                        <span className={s.descriptionProject}>
                            In this project I am creating a social network
                            with the ability to register and profile settings.
                        </span>
                        <div className={s.stackProjectWrapper}>
                            <p className={s.stackProject}>Technologys stack in this project</p>
                            {props.projectData.map(el =>
                                el.tech.map(el =>
                                    <img className={s.tech} src={el} />))}
                        </div>
                        <div className={s.livePreviewWrapper}>
                            <a className={s.livePreview}
                                href="https://kapskii.github.io/Social-network/#/profile" target='_blank' rel="noreferrer">
                                <LiaExternalLinkAltSolid color='#fff' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}