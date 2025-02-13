import { useState } from "react";
import { useData } from "../context/DataContext";

export default function Page() {
  const { plants, loading } = useData();
  const [newPlantName, setNewPlantName] = useState("");

  const createPlant = async () => {
    const response = await fetch("/api/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newPlantName }),
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log("insert error");
    }
  };

  if (loading) return <div>Loading plants...</div>;

  return (
    <div>
      <h1>Home Page</h1>
      <p>plants:</p>
      <div>
        {plants.map((plant) => (
          <div key={plant.id}>{plant.name}</div>
        ))}
      </div>
      <input
        type='text'
        value={newPlantName}
        onChange={(e) => setNewPlantName(e.target.value)}
        placeholder='New plant name'
      />
      <button onClick={createPlant}>Create new plant</button>
    </div>
  );
}
