import React from 'react';
import { useState } from 'react';
import { AddResult } from './AddResult/AddResult';
import classes from './App.module.css';
import TableBody from './TableBody/TableBody';


function App() {

  let [startResults, setResult] = useState<Array<string>>([      
    "2:4 Оренбург - Крылья Советов",
    "1:0 ЦСКА - Зенит",
    "1:0 Динамо - Торпедо",
    "2:1 Ахмат - Локомотив",
    "0:0 Пари НН - Спартак",
    "3:0 Пари НН - Зенит",
    "0:0 Крылья Советов - Спартак",
    "4:0 Крылья Советов - Локомотив",
    // добавить массив результатов
  ])

  function addNewResult(newResult:string):void{
    let newResults = [...startResults, newResult]
    setResult(newResults)
  }

  /* пробую поменять фон (начало)*/

  /* let [addFoneClass, setFoneClass] = useState(classes.main__fone__2)

  let arr=[1,2,3]
  let i=0
  function logger(){

  if (arr[i]==1){
    setFoneClass(classes.main__fone__1)
    console.log("поменял фон на 1")
  } else if (arr[i]==2){
    setFoneClass(classes.main__fone__2)
    console.log("поменял фон на 2")
  } else if (arr[i]==3){
    setFoneClass(classes.main__fone__3)
    console.log("поменял фон на 3")
  }
  i++
  if (i==arr.length){
    i=0
  }
  }

  let timerId = setInterval(logger, 10000, arr) */

  /* пробую поменять фон (конец)*/


  return (  
    <div>
      <div className={classes.main__fone /* + " " + addFoneClass */}>
      {/* подумать про бегущую строку */}
        <div className={classes.container}>
          <TableBody results={startResults}/>
        </div> 

        <div className={classes.container}>
          <AddResult addNewResult={addNewResult}/>
        </div>    
      </div>
    </div>
  );
}

export default App;
