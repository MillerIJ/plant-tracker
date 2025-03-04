import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import styles from "../../styles/Plants.module.css";

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
        <h1 className={styles.title}>My Garden</h1>

        <div className={styles.tabContainer}>
          {tabs.map((tab, index) => (
            // map the tabs
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${styles.tab} ${
                activeTab === index && styles.active
              }`}>
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className={styles.contentContainer}>
          {activeTab === 0 && (
            // Plants Tab
            <div>
              <p>{plants.length}</p>

              {plants.map((plant) => (
                // loop through Plants array
                <div key={plant.id}>{plant.name}</div>
              ))}
            </div>
          )}

          {activeTab === 1 &&
            // Sites Tab
            // loop through Sites array
            sites.map((site, index) => (
              <div key={index}>
                <h2 className={styles.site}>
                  {site.name} - {site.plants.length}
                </h2>

                {site.plants.map((plant, index) => (
                  // loop through the Plants within the site
                  <div key={index}>{plant}</div>
                ))}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
