import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const API_KEY = "https://www.omdbapi.com?apikey=de9811e3";

  const [movie, setmovie] = useState([]);
  const [search, setsearch] = useState("");

  const moviesSearch = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    setmovie(data.Search);
  };

  useEffect(() => {
    moviesSearch("superman");
  }, []);

  return (
    <>
      <h1>MoviesHub</h1>

      <div className="search">
        <input
          placeholder="Search your favorite movie"
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={() => moviesSearch(search)}>search</button>
      </div>
      <div className="movie-container">
        {movie.map((movies) => (
          <Card movies={movies} />
        ))}
      </div>
    </>
  );
}

export default App;
