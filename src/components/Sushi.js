import React from "react";

function Sushi({image, name, price, eatSushi, eaten, item}) {

  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(item)}>
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
