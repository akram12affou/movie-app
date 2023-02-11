import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
function TopMovies() {
  const dispatch = useDispatch();
  const WatchedList = useSelector((state) => state.WatchedList);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=1"
      )
      .then((res) => setMovies(res.data.results));
  }, []);
  return (
        <div class="movies-container">
          {movies.map((e) => {
            return (
              <div class='movie' key={e.id}>
                <span class='title'>{e.original_title}</span>
                <img  src={`https://image.tmdb.org/t/p/w300${e.poster_path}`} alt={e.title} />
                <br />
                <span>{e.overview.substring(0,200)} {e.overview.length>200 ? '...' : ''}</span>
                <br />
                <div>
                 rating : {e.vote_average}
                </div>
                <button
                  onClick={() => dispatch({ type: "first", payload: e })}
                  disabled={
                    WatchedList.find((item) => e.id == item.id) ? true : false
                  }
                >
                  Add to Watched List{" "}
                </button>
              </div>
            );
          })}
    </div>
  );
}


export default TopMovies;
