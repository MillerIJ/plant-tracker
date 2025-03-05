import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

/* SAMPLE DATA
plants = [
  {
    id: 1,
    name: "pothos",
    site: "living room",
    last_watered: 2025-02-14,
    watering_interval: 10
  },
  {
    id: 2,
    name: "staghorn fern",
    site: "office",
    last_watered: 2025-02-10,
    watering_interval: 14
  },
  {
    id: 3,
    name: "cactus",
    site: "front porch",
    last_watered: 2025-02-01,
    watering_interval: 20
  },
  { DEAD PLANT
    id: 4,
    name: "daisy",
    site: "graveyard",
    last_watered: null,
    watering_interval: null
  },
]
*/

export default function Page() {
  const { plants, loading } = useData();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [newPlantName, setNewPlantName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (plants) {
      console.log(sortPlants(plants));
    }
  }, plants);

  function sortPlants(plantArray) {
    let sortedPlants = plantArray.sort();

    return plantArray;
  }

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

  if (loading) return <div>Loading plants...</div>;

  return (
    <div>
      <p>Current date and time: {currentDate.toLocaleString()}</p>
      <div>
        {plants.map((plant) => (
          <div key={plant.id}>
            {plant.name} - {plant.last_watered - plant.watering_interval}
          </div>
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
