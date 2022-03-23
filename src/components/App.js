import React,{useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [isSushi, setIsSushi] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(resp => resp.json())
    .then(fish => setIsSushi(fish))
  },[])


  console.log(isSushi)
  return (
    <div className="app">
      <SushiContainer sushi={isSushi} />
      <Table />
    </div>
  );
}

export default App;
