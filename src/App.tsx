
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

  return (  <div>
    <div className={classes.container}>
      <TableBody results={startResults}/>
    </div> 

    <div className={classes.container}>
      <AddResult addNewResult={addNewResult}/>
    </div>
    
  </div>
  );
}

export default App;
