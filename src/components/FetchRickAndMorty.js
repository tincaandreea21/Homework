import React, { useEffect, useState } from "react";
import "./FetchRickAndMorty.css";
import CreateElement from "./CreateElement";

const FetchRickAndMorty = () => {
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    if (!response.ok) {
      throw new Error("Data could not be found");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        console.log(res.results);
        setResults(res.results);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="list">
      {results &&
        results.map((element) => {
          return <CreateElement element={element} key={element.id} />;
        })}
    </div>
  );
};

export default FetchRickAndMorty;
