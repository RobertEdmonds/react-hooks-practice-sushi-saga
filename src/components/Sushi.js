import React,{useState} from "react";

function Sushi({image, name, price}) {
  const [isEaten, setIsEaten] = useState(false)

  function handleEating(){
    setIsEaten(!isEaten)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEating}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
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
