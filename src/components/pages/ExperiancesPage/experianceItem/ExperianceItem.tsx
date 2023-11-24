import s from './ExperianceItem.module.css'

type PropsType = {
    logo: string
    title: string
    description: string
    duration: string
    tech: string[]
    position: 'left' | 'right'
}


export const ExperianceItem = (props: PropsType) => {
    const wrapperClass = s.experiance + (props.position === 'left' ? ' ' + s.experianceLeft : ' ' + s.experianceRight);
    return (
        <div className={wrapperClass}>
            <div className={s.image_block}>
                <img src={props.logo} alt="work_page" />
            </div>
            <div className={s.description_block}>
                <h2 className={s.title}>{props.title}</h2>
                <h3 className={s.description}>{props.description}</h3>
                <p className={s.duration}>{props.duration}</p>
                <div className={s.stack_wrapper}>
                    <p className={s.title_stack_block}>Technology stack in use</p>
                    <div>
                        {props.tech.map(el => <img className={s.tech} src={el} alt="tech" />)}
                    </div>
                </div>
            </div>
        </div>
    )
}