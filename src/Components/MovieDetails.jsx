import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../styles/MovieDetails.css";
import { useParams } from "react-router-dom";
import Loadingspinner from "./Loadingspinner";
import {Link} from 'react-router-dom'
function MovieDetails() {
  const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
  const [movie, setMovie] = useState([]);
  const [number,setNumber] = useState(4)
  const [loading, setLoading] = useState(false);
  const [similarMovies,setSimilarMovies] = useState([])
  const { id } = useParams();
  console.log(id);
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
  }, []);
 const handleRoute = (e) =>{
  //  window.location.href = `http://${window.location.hostname}/movie/${e.id}`
  console.log(window.location)
 }
  return (
    <div>
      {loading ? (
        <div class='loadingSpinner-container'>
        <Loadingspinner/>
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
                </div>
              </div>
            );
          })}
        </>
      )}
      <h2>Similar Movies -> </h2>
      <div className="similarmovie-container">
      {similarMovies.slice(0,number)?.map((e,i) => {
        return(
          <>
          <div class='similarmovie'>
          
          <span class='title'>{e.original_title}</span>
          
          <img class='similarmovie-img' src={`https://image.tmdb.org/t/p/w300${e.poster_path}`} alt={e.title} />
         language : {e.original_language}
         <Link path={'55'}></Link>
                  <button onClick={}
                  class='details'>Details</button>
          
          </div>
          {number-1 == i && number==4  && <span className="see" onClick={() => setNumber(20)}>See More...</span>}
          {number-1 == i && number==20  && <span className="see" onClick={() => setNumber(4)}>...See Less</span>}
          
          </>
        )
      })}
      </div>
      
    </div>
  );
}

export default MovieDetails;
