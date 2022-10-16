import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantLists}) {
  const renderLists = plantLists.map((list) => {
    return (
      <PlantCard 
        key={list.id}
        lists={list}
      />
    )});



  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {renderLists}
    </ul>
  );
}

export default PlantList;
