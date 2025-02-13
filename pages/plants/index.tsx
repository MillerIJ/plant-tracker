import React from "react";
import { useData } from "../../context/DataContext";

export default function Plants() {
  const { plants, loading } = useData();
  return (
    <div>
      <h1>Plants</h1>
      {plants.map((plant) => (
        <div key={plant.id}>{plant.name}</div>
      ))}
    </div>
  );
}
