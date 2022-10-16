import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantLists, setPlantLists] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plantArr => {
      console.log(plantArr)
      setPlantLists(plantArr)
    })
  }, [])

  const onSearch = (searchPlant) => {
    console.log(searchPlant);
    setSearch(searchPlant);
  };
  const addPlant = (plantObj) => {
    setPlantLists(plant => [plantObj, ...plant])
  }

  const filteredPlants = plantLists.filter((list) => {
    return list.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filteredPlants);
  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearch={onSearch} />
      <PlantList plantLists={filteredPlants} />
    </main>
  );
}

export default PlantPage;
