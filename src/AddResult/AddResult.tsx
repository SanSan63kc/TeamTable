import { startSeasonDate } from "../App"

function checkInputTeamName(homeTemNameValue: string, guestTemNameValue: string):boolean{
    if (homeTemNameValue === guestTemNameValue){
        return false
    } else return true
}

let AddTeam: string[] = ["", ""] /* временное хранилище имен сыгравших команд */

export function AddResult(){

    function addResult():void{
        console.log("нажал кнопку добавить результат")
    }

    return (
        <div>
           <select name="homeTeamName" id="">
            {
                startSeasonDate.map(obj=>{
                    return <option value={obj.teamName}>{obj.teamName}</option>
                })
                
            }            
            </select>
            <select name="guestTeamName" id="">
            {
                startSeasonDate.map(obj=>{
                    return <option value={obj.teamName}>{obj.teamName}</option>
                })
            }            
            </select>
            
            <input type="homeTeamGoals" /> {/* поле ввода голов хозяев поля */}
            <input type="guestTeamGoals" />{/* поле ввода голов хозяев поля */}

            <button onClick={addResult}>Добавить результат</button>

            
        </div>
    )
}