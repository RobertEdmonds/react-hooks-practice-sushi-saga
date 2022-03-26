import React,{useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// const API = "http://localhost:3001/sushis";

function App() {
  const [isSushi, setIsSushi] = useState([])
  const [beginningSlice, setBeginningSlice] = useState(0)
  const [endSlice, setEndSlice] = useState(4)
  const [money, setMoney] = useState(100)
  const [isEaten, setEaten] = useState([])
  

  useEffect(()=>{
    fetch(`http://localhost:3001/sushis?_start=${beginningSlice}&_end=${endSlice}`)
    .then(resp => resp.json())
    .then(fish => setIsSushi(fish))
  },[endSlice])

  function handleChangeSushi(){
    setBeginningSlice(beginningSlice + 4)
    setEndSlice(endSlice + 4)
  }

  const handleEatSushi = (piece) => {
    if(money >= piece.price && !isEaten.includes(piece.id)){
      setMoney(money - piece.price)
      const newEaten = [...isEaten,  piece.id]
      setEaten(newEaten)
      setIsSushi(
        isSushi.map(item => item.id === piece.id ? {...item, eaten: true} : item)
      ) 
    }
    // setIsSushi(
    //   isSushi.map(item => item.id === piece.id ? {...item, eaten: true} : item)
    // )    
    // if(!isEaten.includes(piece.id)){
    //   const newEaten = [...isEaten,  piece.id]
    //   setEaten(newEaten)
    // }
  }

  return (
    <div className="app">
      <SushiContainer sushi={isSushi} handleChangeSushi={handleChangeSushi} eatSushi={handleEatSushi} />
      <Table plates={isEaten} money={money}/>
    </div>
  );
}

export default App;
