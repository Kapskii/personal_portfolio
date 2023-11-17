import { SkillPageType } from '../../../Data/initialDataType'
import { SuperInput } from '../../input/SuperInput'
import s from './SkillsPage.module.css'

type PropsType = {
    skillData: SkillPageType[]
}

export const SkillsPage = (props: PropsType) => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>SKILLS</h1>
            <div className={s.skillsItemWrapper}>
                <SuperInput />
                <div className={s.skillWrapper}>
                    {props.skillData.map(el =>
                        <div className={s.skill}>
                            <p className={s.skillTitle}>{el.title}</p>
                            <img className={s.skillIcon} src={el.icon}></img>
                        </div>)}
                </div>
            </div>
        </div>
    )
}