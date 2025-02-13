import React from "react";
import { useData } from "../../context/DataContext";

export default function Plants() {
  const { plants, loading } = useData();
  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.id}>{plant.name}</div>
      ))}
    </div>
  );
}
