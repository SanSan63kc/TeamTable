import TableRow from "./TableRow/TableRow"
import classes from "./TableBody.module.css"

export type TeamData = {
    id: number,                   // id команды
    teamName: string,             // имя
    position: number,             // позиция в чемпионате  
    matchCounter: number,         // количество сыгранных матчей
    winCount: number,             // количество побед
    drawCount: number,            // количество ничьих
    lossesCount: number           // количество поражений
    goalScored: number,           // голов забито
    goalConceded: number,         // голов пропущено
    goalsDefferenceNum: number,   // разница голов команды (числовой показатель)
    goalsDefferenceStr: string,   // разница голов команды (строковый показатель)
    pointsCount: number,          // количество очков
    championsLigueFlag: boolean,  // участие в Лиге Чемпионов 
    europeLigueFlag: boolean,     // участие в Лиге Европы
    conferenceLigueFlag: boolean, // участие в Лиге Конференций 
    outsiderFlag: boolean,        // стоят на выбывание 
  }

let startSeasonDate: Array<TeamData>  = [
    {
      id: 1,
      teamName: "Ахмат",
      position: 1,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 2,
      teamName: "Динамо",
      position: 2,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 3,
      teamName: "Зенит",
      position: 3,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 4,
      teamName: "Краснодар",
      position: 4,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 5,
      teamName: "Крылья Советов",
      position: 5,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 6,
      teamName: "Локомотив",
      position: 6,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 7,
      teamName: "Оренбург",
      position: 7,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 8,
      teamName: "Пари НН",
      position: 8,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 9,
      teamName: "Ростов",
      position: 9,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 10,
      teamName: "Сочи",
      position: 10,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 11,
      teamName: "Спартак",
      position: 11,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 12,
      teamName: "Торпедо",
      position: 13,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 13,
      teamName: "Урал",
      position: 13,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 14,
      teamName: "Факел",
      position: 14,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 15,
      teamName: "Химки",
      position: 15,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    },
    {
      id: 16,
      teamName: "ЦСКА",
      position: 16,  
      matchCounter: 0,
      winCount: 0,
      drawCount: 0,
      lossesCount: 0,
      goalScored: 0,
      goalConceded: 0,
      goalsDefferenceNum: 0,
      goalsDefferenceStr: "0:0",
      pointsCount: 0,
      championsLigueFlag: false, 
      europeLigueFlag: false,
      conferenceLigueFlag: false, 
      outsiderFlag: false, 
    }  
]

export default function TableBody(){
    return (
        <div className={classes.table__inner}>
            <div className={classes.table__title}>Таблица чемпионата России (2022-2023)</div>
            <div className={classes.table__inner}>
            {
                startSeasonDate.map((object, index)=>{
                    return (
                        <TableRow 
                            id = {startSeasonDate[index].id}
                            position = {startSeasonDate[index].position}
                            teamName = {startSeasonDate[index].teamName}
                            matchCounter = {startSeasonDate[index].matchCounter}
                            winCount = {startSeasonDate[index].winCount}
                            drawCount = {startSeasonDate[index].drawCount}
                            lossesCount = {startSeasonDate[index].lossesCount}
                            goalScored = {startSeasonDate[index].goalScored}
                            goalConceded = {startSeasonDate[index].goalConceded}
                            goalsDefferenceNum = {startSeasonDate[index].goalsDefferenceNum}
                            goalsDefferenceStr = {startSeasonDate[index].goalsDefferenceStr}
                            pointsCount = {startSeasonDate[index].pointsCount}
                            championsLigueFlag = {startSeasonDate[index].championsLigueFlag}
                            europeLigueFlag = {startSeasonDate[index].europeLigueFlag}
                            conferenceLigueFlag = {startSeasonDate[index].conferenceLigueFlag}
                            outsiderFlag = {startSeasonDate[index].outsiderFlag}
                        />
                    )
                })
            } 
            </div>         
        </div>
    )
}