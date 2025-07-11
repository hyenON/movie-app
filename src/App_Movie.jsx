import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  console.log(isLoading, setIsLoading);
  const getMovies = async () => {
    const response = await fetch("https://hyenon.r-e.kr/movies");
    const json = await response.json();
    console.log(json);
    setMovies(json.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>Movie App !</h1>
      {isLoading ? (
        "로딩중..."
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
