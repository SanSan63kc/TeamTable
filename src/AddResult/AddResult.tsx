import { startSeasonDate } from "../App"
import classes from './AddResult.module.css';

// пока эта функция не нужна
/* function checkInputTeamName(homeTemNameValue: string, guestTemNameValue: string):boolean{
    if (homeTemNameValue === guestTemNameValue){
        return false
    } else return true
} */

type newResultObjType = {
    homeTeamName: string,
    guestTeamName: string,
    homeTeamGoals: string,
    guestTeamGoals: string,     
}

let newResultObj = {
    homeTeamName: "",
    guestTeamName: "",
    homeTeamGoals: "",
    guestTeamGoals: "",
}

export function AddResult(){

    function addResult():void{
        /* заготовим строку для массива */
        /* "1:0 Динамо - Торпедо" */
        console.log(`${newResultObj.homeTeamGoals}:${newResultObj.guestTeamGoals} ${newResultObj.homeTeamName} - ${newResultObj.guestTeamName}`)
    }

    return (
        <div className={classes.addResult__form}>
            <div>
                <select name="homeTeamName" id="" onChange={e=>{
                    newResultObj.homeTeamName = (e.target.value)
                }}>
                
                {startSeasonDate.map(obj=>{
                        return <option value={obj.teamName}>{obj.teamName}</option>})
                }            
                </select>

                <select name="guestTeamName" id="" onChange={e=>{
                    newResultObj.guestTeamName = (e.target.value)
                }}>
                
                {startSeasonDate.map(obj=>{
                        return <option value={obj.teamName}>{obj.teamName}</option>})
                }            
                </select>
            </div>
            
            <div>
                {/* поле ввода голов хозяев поля */}
                <input className={classes.goals__input + " " + classes.left__input } onChange={e =>{
                    newResultObj.homeTeamGoals = e.target.value}}/> 

                {/* поле ввода голов хозяев поля */}
                <input className={classes.goals__input} onChange={e =>{
                    newResultObj.guestTeamGoals = e.target.value}}/>
            </div>
            

            <button onClick={addResult}>Добавить результат</button>

        </div>
    )
}