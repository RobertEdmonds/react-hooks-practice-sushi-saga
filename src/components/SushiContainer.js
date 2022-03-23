import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi}) {
  const displaySushi = sushi.map(item =>{
    return <Sushi key={item.id} name={item.name} image={item.img_url} price={item.price} />
  })
  return (
    <div className="belt">
      {displaySushi}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
