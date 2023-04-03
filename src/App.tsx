
import classes from './App.module.css';
import TableBody from './TableBody/TableBody';


// начало нехорошего временного куска кода
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

export function modifyTable(results: string[]): /* string */ void {

  results.forEach((resultString, matchNumber)=>{
    let matchResult: string = resultString.split(" ")[0]

    let homeTeamName: string                // имя команды хозяев поля
    let guestTeamName: string               // имя команды гостей
    let goalsHomeTeam: number = 0           // забито хозяевами поля
    let goalsGuestTeam: number = 0          // забито гостями
    let homeIndex: number = 0               // id команды хозяев поля для поиска
    let guestIndex: number = 0              // id команды гостей для поиска
    let homeWinFlag: boolean = false        // победили хозяева поля
    let guestWinFlag: boolean = false       // победили гости
    let drawFlag: boolean  = false          // ничья
    let indexOfFirstSpace: number = 0       // место первого пробела (для поиска имён команд в строке)
        
    if (matchResult!=="-:-"){               // матч сыгран, правим исходный массив. В реале так делать нельзя
      [goalsHomeTeam, goalsGuestTeam] = matchResult.split(":").map(Number)

      // определим флаги результата матча (хозяева-гости-ничья)
      if (goalsHomeTeam > goalsGuestTeam) homeWinFlag = true
      else if (goalsHomeTeam < goalsGuestTeam) guestWinFlag = true
      else if (goalsHomeTeam === goalsGuestTeam) drawFlag = true
      else console.log("Необработанное исключение по определению победителя матча")
            
      // определим имена сыгравших в матче команд
      indexOfFirstSpace = resultString.indexOf(" ")
      let teamPairString: string = resultString.slice(indexOfFirstSpace+1);
      [homeTeamName, guestTeamName] = teamPairString.split(" - ");

      //P.S. в реале так делать очень не хорошо, но находим индексы объектов гостей и хозяев....      
      startSeasonDate.forEach((objTeam, index)=>{
        if (objTeam.teamName === homeTeamName) {homeIndex = index} 
        if (objTeam.teamName === guestTeamName) {guestIndex = index} 
      })

      // заполняем массив данными матча хозяев поля
      startSeasonDate[homeIndex].matchCounter++
      if (homeWinFlag) startSeasonDate[homeIndex].winCount++
      if (guestWinFlag) startSeasonDate[homeIndex].lossesCount++
      if (drawFlag) startSeasonDate[homeIndex].drawCount++
      if (goalsHomeTeam>0) startSeasonDate[homeIndex].goalScored+=goalsHomeTeam
      if (goalsGuestTeam>0) startSeasonDate[homeIndex].goalConceded+=goalsGuestTeam
      if (goalsHomeTeam>0 || goalsGuestTeam>0){ // после матча изменились строковые и числовые показатели разницы голов
        //  меняем числовой показатель
        startSeasonDate[homeIndex].goalsDefferenceNum+=goalsHomeTeam-goalsGuestTeam
        //  меняем строковый показатель
        let goalCurrScored: number
        let goalCurrConceded: number
        [goalCurrScored, goalCurrConceded] = startSeasonDate[homeIndex].goalsDefferenceStr.split(":").map(Number)
        goalCurrScored+=goalsHomeTeam
        goalCurrConceded+=goalsGuestTeam
        startSeasonDate[homeIndex].goalsDefferenceStr = goalCurrScored+":"+goalCurrConceded
      }
      if (homeWinFlag) {    //  добавляем в статистику 3 очка за победу хозяевам
        startSeasonDate[homeIndex].pointsCount=startSeasonDate[homeIndex].pointsCount+3
      } else if (drawFlag){ //  добавляем одно очко за ничью хозяевам
        startSeasonDate[homeIndex].pointsCount=startSeasonDate[homeIndex].pointsCount+1
      }

      // заполняем массив данными матча гостей
      startSeasonDate[guestIndex].matchCounter++
      if (guestWinFlag) startSeasonDate[guestIndex].winCount++
      if (homeWinFlag) startSeasonDate[guestIndex].lossesCount++
      if (drawFlag) startSeasonDate[guestIndex].drawCount++
      if (goalsGuestTeam>0) startSeasonDate[guestIndex].goalScored+=goalsHomeTeam
      if (goalsHomeTeam>0) startSeasonDate[guestIndex].goalConceded+=goalsGuestTeam
      if (goalsHomeTeam>0 || goalsGuestTeam>0){ // после матча изменились строковые и числовые показатели разницы голов
        //  меняем числовой показатель
        startSeasonDate[guestIndex].goalsDefferenceNum+=goalsGuestTeam-goalsHomeTeam
        //  меняем строковый показатель
        let goalCurrScored: number
        let goalCurrConceded: number
        [goalCurrScored, goalCurrConceded] = startSeasonDate[guestIndex].goalsDefferenceStr.split(":").map(Number)
        goalCurrScored+=goalsGuestTeam
        goalCurrConceded+=goalsHomeTeam
        startSeasonDate[guestIndex].goalsDefferenceStr = goalCurrScored+":"+goalCurrConceded
      }
      if (guestWinFlag) {    //  добавляем в статистику 3 очка за победу гостям
        startSeasonDate[guestIndex].pointsCount=startSeasonDate[guestIndex].pointsCount+3
      } else if (drawFlag){ //  добавляем одно очко за ничью гостям
        startSeasonDate[guestIndex].pointsCount=startSeasonDate[guestIndex].pointsCount+1
      }
    }      
  })

  startSeasonDate
  //Сортируем массив объектов по приоритетам: набранные очки => разница голов => забитые голы => имя клуба по алфавиту
  .sort((a,b)=>a.teamName > b.teamName ? 1 : -1)
  .sort((a,b)=>b.goalScored-a.goalScored)
  .sort((a,b)=>b.goalsDefferenceNum-a.goalsDefferenceNum)
  .sort((a,b)=>b.pointsCount-a.pointsCount)

  // расчитаем позиции клубов и флаги зон (Лига чемпионов (1-3), Лига Европы (4-5), Лига Конференций (6), аутсайдеры (15-16))
  startSeasonDate.forEach((obj, index)=>{
    startSeasonDate[index].position = index+1
    if (startSeasonDate[index].position === 1 || startSeasonDate[index].position === 2 || startSeasonDate[index].position === 3){
        startSeasonDate[index].championsLigueFlag = true
    } else if (startSeasonDate[index].position === 4 || startSeasonDate[index].position === 5){
      startSeasonDate[index].europeLigueFlag = true
    } else if (startSeasonDate[index].position === 6){
      startSeasonDate[index].conferenceLigueFlag = true
    } else if (startSeasonDate[index].position === 15 || startSeasonDate[index].position === 16){
      startSeasonDate[index].outsiderFlag = true
    } else {
      startSeasonDate[index].championsLigueFlag = false
      startSeasonDate[index].europeLigueFlag = false
      startSeasonDate[index].conferenceLigueFlag = false
      startSeasonDate[index].outsiderFlag = false
    }
  })
}

var matcResults = [      
  "2:4 Оренбург - Крылья Советов",
  "1:0 ЦСКА - Зенит",
  "1:0 Динамо - Торпедо",
  "2:1 Ахмат - Локомотив",
  "0:0 Пари НН - Спартак",
  "0:0 Крылья Советов - Спартак",
  // добавить массив результатов
];

modifyTable(matcResults)
// конец нехорошего временного куска кода


function App() {
  return (  <div className={classes.container}>
    <TableBody tasks={startSeasonDate}/>
  </div> 
  );
}

export default App;
