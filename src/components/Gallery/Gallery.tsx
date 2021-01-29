import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

export const Gallery = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      console.log(process.env.REACT_APP_API_KEY);
      const response = await axios.get(
        `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_API_KEY}`
      );
      console.log(response.data);
      setMovies(response.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(movies);
  return (
    <div className="Gallery">
      {movies.map((movie: any) => {
        return (
          <div key={movie.id} className="Card">
            <img alt={movie.title} src={movie.image} />
            <p className="Card-title">{movie.title}</p>
            <p className="Card-rating">{movie.imDbRating}</p>
          </div>
        );
      })}
    </div>
  );
};
