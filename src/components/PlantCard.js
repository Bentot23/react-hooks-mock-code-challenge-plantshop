import React, {useState} from "react";

function PlantCard({lists}) {
  const {name, image, price} = lists;
  const [isInStock, setIsInStock] = useState(true);

  const handleInStock = () => setIsInStock(!isInStock)

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
