import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, handleChangeSushi, eatSushi}) {

  const displaySushi = sushi.map(item =>{
    return <Sushi key={item.id} name={item.name} image={item.img_url} price={item.price} eatSushi={eatSushi} eaten={item.eaten} item={item}/>
  })

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton handleChangeSushi={handleChangeSushi}/>
    </div>
  );
}

export default SushiContainer;
