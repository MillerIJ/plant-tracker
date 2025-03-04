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

  // check for plant name
  function checkForm(event) {
    event.preventDefault();
    if (!newPlantName) {
      console.log("empty plant name");
    } else {
      console.log("creating plant");
      createPlant();
    }
  }
  // if (loading) return <div>Loading plants...</div>;

  return (
    <div>
      <div>
        {plants.map((plant) => (
          <div key={plant.id}>{plant.name}</div>
        ))}
      </div>
      {/* <div>
        <h2>Create New Plant</h2>
        <form action='' onSubmit={(e) => checkForm(e)}>
          <input
            type='text'
            value={newPlantName}
            onChange={(e) => setNewPlantName(e.target.value)}
            placeholder='New plant name'
          />
          <button type='submit'>Create new plant</button>
        </form>
      </div> */}
    </div>
  );
}
