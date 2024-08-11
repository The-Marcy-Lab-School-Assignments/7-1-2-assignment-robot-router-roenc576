import { useContext } from 'react'
import RobotContext from '../context/RobotContext'
import BotCard from './BotCard'

const BotsList = ({ botTypeFilter }) => {
    const { robots } = useContext(RobotContext)

    return (
        <div className="ui centered cards">
            {
                robots?.filter(robot => !botTypeFilter || robot.bot_class === botTypeFilter)
                    .map(robot => { return <BotCard key={robot.id} bot={robot} /> })
            }
        </div>
    )
}

export default BotsList