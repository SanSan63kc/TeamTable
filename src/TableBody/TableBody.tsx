import TableRow from "./TableRow/TableRow"
import classes from "./TableBody.module.css"
import { TeamData } from "../App"

type PropsType = {
  tasks: Array<TeamData>
}

export default function TableBody(props:PropsType){
    return (
        <div className={classes.table__inner}>
            <div className={classes.table__title}>Таблица чемпионата России (2022-2023)</div>
            <div className={classes.table__inner}>
            {
                props.tasks.map((object, index)=>{
                    return (
                        <TableRow 
                            id = {props.tasks[index].id}
                            position = {props.tasks[index].position}
                            teamName = {props.tasks[index].teamName}
                            matchCounter = {props.tasks[index].matchCounter}
                            winCount = {props.tasks[index].winCount}
                            drawCount = {props.tasks[index].drawCount}
                            lossesCount = {props.tasks[index].lossesCount}
                            goalScored = {props.tasks[index].goalScored}
                            goalConceded = {props.tasks[index].goalConceded}
                            goalsDefferenceNum = {props.tasks[index].goalsDefferenceNum}
                            goalsDefferenceStr = {props.tasks[index].goalsDefferenceStr}
                            pointsCount = {props.tasks[index].pointsCount}
                            championsLigueFlag = {props.tasks[index].championsLigueFlag}
                            europeLigueFlag = {props.tasks[index].europeLigueFlag}
                            conferenceLigueFlag = {props.tasks[index].conferenceLigueFlag}
                            outsiderFlag = {props.tasks[index].outsiderFlag}
                        />
                    )
                })
            } 
            </div>         
        </div>
    )
}