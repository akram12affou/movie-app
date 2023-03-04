import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/MovieSearch.css";
import Loadingspinner from "./Loadingspinner";
import { useDispatch, useSelector } from "react-redux";
function MovieSearch() {
  const WatchedList = useSelector((state) => state.WatchedList);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");
  const [adult, setAdult] = useState(false);
  const [page, setPage] = useState(1);
  const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
  useEffect(() => {
    if (query == "") {
      setMovieList([]);
      return;
    }
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=${page}&include_adult=${adult}&query=${query}`
      )
      .then((res) => setMovieList(res.data.results))
      .then((res) => setLoading(false))
      .catch((err) => console.log(err));
  }, [query, page, adult]);

  const handlebutton = (e) => {
    if (e == "+") {
      setPage((prev) => {
        return prev + 1;
      });
    }
    if (e == "-") {
      setPage((prev) => {
        return prev - 1;
      });
    }
  };
  const handleAdultContent = () => {
    setAdult(!adult);
  };
  const handleTyping = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };
  return (
    <div>
      <div class="params">
        <div>
          <label>Search a Movie : </label>
          <input
            class="input-search"
            type="text"
            value={query}
            onChange={(e) => handleTyping(e)}
          />
        </div>
        <div>
          +18 :{" "}
          <input
            type="checkbox"
            value={adult}
            onChange={() => handleAdultContent()}
          />
        </div>
      </div>

      {loading ? (
        <div class="loadingSpinner-container">
          <Loadingspinner />
        </div>
      ) : (
        <div className="movies-container">
          {movieList.map((e) => {
            return (
              <div class="movie" key={e.id}>
                <span class="title">{e.original_title}</span>
                <img
                  src={`https://image.tmdb.org/t/p/w300${e.poster_path}`}
                  alt={e.title}
                />
                <br />
                <span>
                  {e.overview.substring(0, 200)}{" "}
                  {e.overview.length > 200 ? "..." : ""}
                </span>
                <br />
                <Link to={`movie/${e.id}`}>
                  <button class="details">Details</button>
                </Link>
                <button
                  class="add"
                  style={{
                    textDecoration:
                      WatchedList.find((item) => e.id == item.id) &&
                      "line-through",
                  }}
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
      )}
      <br />
      {query.length !== 0 && (
        <div class="pages">
          <button
            class="minus-button"
            onClick={() => handlebutton("-")}
            disabled={page == 1}
          >
            -
          </button>{" "}
          {page} <button onClick={() => handlebutton("+")}>+</button>
        </div>
      )}
      <br />
    </div>
  );
}

export default MovieSearch;
