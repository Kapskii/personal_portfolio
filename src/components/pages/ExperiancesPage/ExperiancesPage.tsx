import { ExperiancePageType } from '../../../Data/initialDataType'
import { SuperInput } from '../../input/SuperInput'
import s from './ExperiancesPage.module.css'
import { ExperianceItem } from './experianceItem/ExperianceItem'

type PropsType = {
    experianceData: ExperiancePageType[]
}

export const ExperiancePage = (props: PropsType) => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>EXPERIANCE</h1>
            <div className={s.experianceItemWrapper}>
                <SuperInput placeholder='Search...'/>
                <div className={s.experiancesWrapper}>
                    {props.experianceData.map((el, index) => {
                        return <ExperianceItem 
                            position={index%2 === 0 ? 'left': 'right'}
                            logo={el.logo} 
                            title={el.title} 
                            description={el.description} 
                            duration={el.duration} 
                            tech={el.stack}/>
                    })}
                </div>
            </div>
        </div>
    )
}