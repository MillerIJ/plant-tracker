import { createClient } from "../utils/supabase/component";
import { useState } from "react";

export async function getServerSideProps() {
  const supabase = createClient();

  // Fetch data from external API
  const { data: plants, error } = await supabase.from("plants").select("*");
  if (error) {
    console.log(error);
  }

  // Pass data to the page via props
  return { props: { plants } };
}

export default function Page({ plants }) {
  // Create new plant
  const [newPlantName, setNewPlantName] = useState(" ");

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

  return (
    <div>
      <h1>Home Page</h1>

      <p>plants:</p>

      {!plants ? (
        <div>Loading plants...</div>
      ) : (
        <div>
          {plants.map((plant) => {
            return <div key={plant.id}>{plant.name}</div>;
          })}
        </div>
      )}

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
