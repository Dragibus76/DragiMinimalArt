import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Searchbar = () => {
  const [posterData, setPosterData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8055/items/Posters`)
      .then((results) => setPosterData(results.data.data));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        {/* SEARCHBAR */}
        <form>
          <input
            type="text"
            placeholder="Entrez le titre du Poster"
            id="serch-input"
          />
          <input type="submit" value="Rechercher" />
        </form>

        {/* SORTBAR */}
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Recent<span>➜</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Ancien<span>➜</span>
          </div>
        </div>
      </div>

      {/* RESULT */}
      <div className="result">
        {posterData.slice(0,12).map((poster) => (
          <Card key={poster.id} propsPoster={poster}/>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
