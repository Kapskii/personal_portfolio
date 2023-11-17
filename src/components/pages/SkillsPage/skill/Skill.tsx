import { SkillPageType } from '../../../../Data/initialDataType'
import s from './Skill.module.css'

type PropsType = SkillPageType;

export const Skill = (props: PropsType) => {
    return (
        <div className={s.skill}>
            <p className={s.skillTitle}>{props.title}</p>
            <img className={s.skillIcon} src={props.icon}></img>
        </div>
    )
}