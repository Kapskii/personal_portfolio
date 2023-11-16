import { SkillPageType } from '../../../State/initialDataType'
import s from './SkillsPage.module.css'

type PropsType = {
    skillData: SkillPageType[]
}

export const SkillsPage = (props: PropsType) => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>SKILLS</h1>
            <div className={s.skillsItemWrapper}>
                <input className={s.inputItem} placeholder='Search...' />
                <div className={s.skillWrapper}>
                {props.skillData.map(el => <div className={s.skill}><p className={s.skillTitle}>{el.title}</p></div>)}
                </div>
            </div>
        </div>
    )
}