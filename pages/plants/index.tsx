import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";

const tabs = ["plants", "sites"];

// create array of sites from plants
function getSites(plants) {
  const sitesArray = [];
  // loop through plants array
  for (let i = 0; i < plants.length; i++) {
    // check if site is already in sitesArray
    if (!sitesArray.includes(plants[i].site)) {
      // if not then add site to sitesArray
      sitesArray.push({
        name: plants[i].site,
        plants: [],
      });
    }
    // then push plant to site array
    sitesArray
      .find((site) => site.name === plants[i].site)
      .plants.push(plants[i].name);
  }
  return sitesArray;
}

export default function Plants() {
  const { plants, loading } = useData();
  const [activeTab, setActiveTab] = useState(0);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    if (plants.length) {
      setSites(getSites(plants));
    }
  }, [plants]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>My Plants</h1>

        <div>
          {tabs.map((tab, index) => (
            <button key={index} onClick={() => setActiveTab(index)}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 0 &&
          plants.map((plant) => <div key={plant.id}>{plant.name}</div>)}

        {activeTab === 1 &&
          sites.map((site, index) => <div key={index}>{site.name}</div>)}
      </div>
    );
  }
}
