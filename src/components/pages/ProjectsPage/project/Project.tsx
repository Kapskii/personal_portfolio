import s from './Project.module.css'
import { FaGithubSquare } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { ProjectsPageType } from '../../../../Data/initialDataType';

type PropsType = ProjectsPageType

export const Project = (props: PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.titleWrapper}>
                <h3 className={s.titleProject}>{props.title}</h3>
                <a className={s.projectLink}
                    title='GitHub link'
                    href={props.linkGit} target='_blank' rel="noreferrer">
                    <FaGithubSquare size={30} color='#fff' />
                </a>
            </div>
            <span className={s.descriptionProject}>{props.description}</span>
            <div className={s.stackProjectWrapper}>
                <p className={s.stackProject}>Technologys stack in this project</p>
                {props.tech.map(el => <img className={s.tech} src={el} />)}
            </div>
            <div className={s.livePreviewWrapper}>
                <a className={s.livePreview}
                    href={props.linkLive} target='_blank' rel="noreferrer">
                    <LiaExternalLinkAltSolid color='#fff' />
                </a>
            </div>
        </div>
    )
}