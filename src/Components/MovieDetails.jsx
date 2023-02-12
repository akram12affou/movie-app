import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../styles/MovieDetails.css";
import { useParams } from "react-router-dom";
import Loadingspinner from "./Loadingspinner";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
function MovieDetails() {
  const dispatch = useDispatch();
  const WatchedList = useSelector((state) => state.WatchedList);
  const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
  const [movie, setMovie] = useState([]);
  const [number, setNumber] = useState(4);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_TMDB_KEY}&language=en-US`
      )
      .then((res) => setMovie(res.data))
      .then((res) => setLoading(false))
      .catch((err) => console.log(err));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
      .then((res) => setSimilarMovies(res.data.results))
      .catch((err) => console.log(err));

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
      .then((res) => setReviews(res.data.results))
      .catch((err) => console.log(err));
  }, [id]);


  return (
    <div>
      {loading ? (
        <div class="loadingSpinner-container">
          <Loadingspinner />
        </div>
      ) : (
        <>
          {[movie]?.map((e) => {
            return (
              <div class="Movie-details">
                <div class="moviedetails-img">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${e.poster_path}`}
                    alt=""
                  />
                </div>
                <div class="moviedetails-details">
                  <h1>{e.original_title}</h1>
                  Overview :<span>{e.overview}</span>
                  <span>average vote : {e.vote_average}</span>
                  <p> release date : {e.release_date}</p>
                  <p>language : {e.original_language}</p>
                  <p>runtime : {e.runtime} min</p>
                  <a href={e.homepage}>home page</a>
                  <button
                    onClick={() => dispatch({ type: "first", payload: e })}
                    disabled={
                      WatchedList.find((item) => e.id == item.id) ? true : false
                    }
                  >
                    add to watch List
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
      {reviews.length !== 0 && (
        <>
          {" "}
          <h2>Reviews -{">"} </h2>
          {reviews.map((e) => {
            return (
              <>
                <div class="reviews">
                  {/* {JSON.stringify(e)} */}
                  <div class="cont">
                    <img
                      class="img"
                      src={e.author_details.avatar_path?.slice(1)}
                      alt=""
                    />{" "}
                    <h3> {e.author_details.username} :</h3>
                  </div>

                  <span>{e.content}</span>
                  <br />
                  <h5>
                    Created at : <span>{e.created_at}</span>
                  </h5>
                </div>
                <hr />
              </>
            );
          })}
        </>
      )}
      {similarMovies.length !== 0 && (
        <>
          <h2>Similar Movies -{">"} </h2>
          <div className="similarmovie-container">
            {similarMovies.slice(0, number)?.map((e, i) => {
              return (
                <Fragment key={i}>
                  <div class="similarmovie">
                    <span class="title">{e.original_title}</span>
                    <img
                      class="similarmovie-img"
                      src={`https://image.tmdb.org/t/p/w300${e.poster_path}`}
                      alt={e.title}
                    />
                    language : {e.original_language}
                    <Link to={`/movie/${e.id}`}>
                      <button class="details">Details</button>
                    </Link>
                  </div>
                  {number - 1 == i && number == 4 && (
                    <span className="see" onClick={() => setNumber(20)}>
                      See More...
                    </span>
                  )}
                  {number - 1 == i && number == 20 && (
                    <span className="see" onClick={() => setNumber(4)}>
                      ...See Less
                    </span>
                  )}
                </Fragment>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
