import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
    <div>
      {movies?.map((e) => {
        return (
          <main key={e.id}>
            <span>{e.original_title}</span>
            <br />
            <span>{e.overview}</span>
            <br />
            <button
              onClick={() => dispatch({ type: "first", payload: e })}
              disabled={WatchedList.find(item => e.id == item.id)?true:false}
            >
              Add to Watched List{" "}
            </button>
            <hr />

            <br />
          </main>
        );
      })}
    </div>
  );
}

export default TopMovies;
