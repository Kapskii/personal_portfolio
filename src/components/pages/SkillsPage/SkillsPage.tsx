import { SkillPageType } from '../../../Data/initialDataType'
import { SuperInput } from '../../input/SuperInput'
import s from './SkillsPage.module.css'
import { Skill } from './skill/Skill'

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
                        <Skill title={el.title} icon={el.icon}/>
                        )}
                </div>
            </div>
        </div>
    )
}