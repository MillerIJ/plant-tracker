import React, { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "../utils/supabase/component";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("plants").select("*");
      if (error) {
        console.error(error);
      } else {
        setPlants(data);
      }
      setLoading(false);
    };

    fetchPlants();
  }, []);

  return (
    <DataContext.Provider value={{ plants, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
