import { SuperInput } from '../../input/SuperInput'
import s from './ProjectsPage.module.css'
import { ProjectsPageType } from '../../../Data/initialDataType';
import { Project } from './project/Project';


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
                    {props.projectData.map(el => <Project title={el.title} tech={el.tech} description={el.description} linkGit={el.linkGit} linkLive={el.linkLive} />)}
                </div>
            </div>
        </div>
    )
}