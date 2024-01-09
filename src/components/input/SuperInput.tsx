import s from './SuperInput.module.css'

type PropsType = {
    placeholder: string
    type?: string
}

export const SuperInput = (props: PropsType) => {
    return (
        <input className={s.inputItem} type={props.type} placeholder={props.placeholder} />
    )
}