import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const [newPlant, setnewPlant] = useState({});

  const handleNewplant = e => {
    setnewPlant(plant => {
      return {...plant, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddPlant(newPlant)
    e.target.reset()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNewplant} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleNewplant} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleNewplant} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
