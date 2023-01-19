import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  const [movie, setMovie] = useState([]);
  // const api_key = "seJmylkjR3eHPVyEf-NBBCB4K19w9t38";
  // const api_url = "https://api.themoviedb.org/3/movie/latest&language=en-US";
  const getResponseData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=19baca4bfea4cb00840670bcfa185ae2&language=en-US&page=1"
    );
    const response = await data.json();
    console.log("re", response.results);
    setMovie(response.results);
  };
  useEffect(() => {
    getResponseData();
  }, []);
  return (
    <>
      {movie.map((item) => (
        <div className="container">
          <div
            className="card"
            // style={{ width: "250px", float: "left", height: "350px" }}
          >
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title} </h5>
              <p className="card-text">{item.release_date}</p>
              <Link to={`/Moviedetail/${item.id}`}>
                <button className="btn btn-danger"> More</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
