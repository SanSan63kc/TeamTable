import classes from "./TableRow.module.css"
import { TeamData } from "../TableBody"


export default function TableRow(props: TeamData){
    let additionalClass: string = props.championsLigueFlag ? " " + classes.championsLigue : 
                            props.europeLigueFlag ? " " + classes.europeLigue : 
                            props.conferenceLigueFlag ? " " + classes.conferenceLigue :
                            props.outsiderFlag ? " " + classes.outsider : ""

    return (
        <div className={classes.team__string    + additionalClass}>
                <div className={classes.team__position}>{props.position}</div>{/* Позиция */}
                <div className={classes.team__name}>
                    <div className={classes.team__name__title}>
                        {props.teamName.toUpperCase()}</div>
                </div>{/* Имя команды */}
                <div className={classes.match__counter}>{props.matchCounter}</div>{/* количество игр */}
                <div className={classes.win__count}>{props.winCount}</div>{/* Количество побед */}
                <div className={classes.draw__count}>{props.drawCount}</div>{/* Количество ничьих */}
                <div className={classes.losses__count}>{props.lossesCount}</div>{/* Количество поражений */}
                <div className={classes.goals_defference_str}>{props.goalsDefferenceStr}</div>{/* Разница голов строка */}
                <div className={classes.points__count}>{props.pointsCount}</div>{/* Количество очков */}
        </div>
    )
}