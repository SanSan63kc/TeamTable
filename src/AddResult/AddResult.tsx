import { useState } from "react";
import { startSeasonDate } from "../App"
import classes from './AddResult.module.css';

type newResultObjType = {
    homeTeamName: string,
    guestTeamName: string,
    homeTeamGoals: string,
    guestTeamGoals: string,     
}

let newResultObj: newResultObjType = {
    homeTeamName: "",
    guestTeamName: "",
    homeTeamGoals: "",
    guestTeamGoals: "",
}

export function AddResult(){

    let [errorHomeTeamName, setErrorHomeTeamName] = useState<string|null>(null)
    let [errorGuestTeamName, setErrorGuestTeamName] = useState<string|null>(null)
    let [errorHomeTeamGoals, setErrorHomeTeamGoals] = useState<string|null>(null)
    let [errorGuestTeamGoals, setErrorGuestTeamGoals] = useState<string|null>(null)
    

    function addResult():void{

        /* защита от того, что обе команды с одинаковым именем - не допилена */
        if (newResultObj.homeTeamName === newResultObj.guestTeamName){
            setErrorHomeTeamName("имя хозяев и гостей не может совпадать")
            setErrorGuestTeamName("имя хозяев и гостей не может совпадать")
        }

        /* защитник для имени хозяев поля */
        if (newResultObj.homeTeamName.trim()!=="" ){
            setErrorHomeTeamName("")
        } else {
            setErrorHomeTeamName("поле имени хозяев поля должно быть заполненным")
        }

        /* защитник для имени гостей */
        if (newResultObj.guestTeamName.trim()!=="" ){
            setErrorGuestTeamName("")
        } else {
            setErrorGuestTeamName("поле имени гостей должно быть заполненным")
        }

        /* защитник для голов хозяев поля */
        if (newResultObj.homeTeamGoals.trim()!==""){
            setErrorHomeTeamGoals("")
        } else {
            setErrorHomeTeamGoals("поле имени хозяев поля должно быть заполненным")
        }
        
        /* защитник для голов гостей */
        if (newResultObj.guestTeamGoals.trim()!==""){
            setErrorGuestTeamGoals("")
        } else {
            setErrorGuestTeamGoals("поле имени гостей должно быть заполненным")
        }

        if (!errorHomeTeamName && !errorGuestTeamName && !errorHomeTeamGoals && !errorGuestTeamGoals){
            console.log(`${newResultObj.homeTeamGoals}:${newResultObj.guestTeamGoals} ${newResultObj.homeTeamName} - ${newResultObj.guestTeamName}`)
        }
    }

    return (
        <div className={classes.addResult__form}>
            <div>
                <select name="homeTeamName" id="" className={errorHomeTeamName ? " " + classes.error: ""} onChange={e=>{
                    setErrorHomeTeamName("")
                    newResultObj.homeTeamName = (e.target.value)               
                }}>
                
                {startSeasonDate.map(obj=>{
                        return <option value={obj.teamName}>{obj.teamName}</option>})
                }            
                </select>

                <select placeholder="" name="guestTeamName" id="" className={errorGuestTeamName ? " " + classes.error: ""} onChange={e=>{
                    setErrorGuestTeamName("")
                    newResultObj.guestTeamName = (e.target.value)              
                }}>
                
                {startSeasonDate.map(obj=>{
                        return <option value={obj.teamName}>{obj.teamName}</option>})
                }            
                </select>
            </div>
            
            <div>
                {/* поле ввода голов хозяев поля */}
                <input className={classes.goals__input + " " + classes.left__input + (errorHomeTeamGoals ? " " + classes.error: "") } onChange={e =>{
                    setErrorHomeTeamGoals("")
                    newResultObj.homeTeamGoals = e.target.value}}/> 

                {/* поле ввода голов хозяев поля */}
                <input className={classes.goals__input + (errorGuestTeamGoals ? " " + classes.error: "") } onChange={e =>{
                    setErrorGuestTeamGoals("")
                    newResultObj.guestTeamGoals = e.target.value}}/>
            </div>
            

            <button onClick={addResult}>Добавить результат</button>
            {(errorHomeTeamName || errorGuestTeamName || errorHomeTeamGoals || errorGuestTeamGoals) && <div className={classes.error__message}> "Заполните поля"</div> }
        </div>
    )
}