import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Moviedetail.css";
import Nav from "./Nav";
function Moviedetail() {
  const [mdetail, setMdetail] = useState([]);
  var { id } = useParams();
  console.log("id", id);
  const getMoviedetail = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1c349502ffa6fe67721a2ea4260bed9f&language=en-US`
    );
    const resData = await res.json();
    console.log("re", resData);
    setMdetail(resData);
  };
  useEffect(() => {
    getMoviedetail();
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div
          style={{ height: "600px", width: "350px" }}
          className="card"
          // style={{ width: "250px", float: "left", height: "350px" }}
        >
          <img
            style={{ width: "350px", height: "300px" }}
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500/${mdetail.poster_path}`}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{mdetail.original_title} </h5>
            <h6 className="card-text">Release On: {mdetail.release_date} </h6>
            <p className="card-text"> Overview : {mdetail.overview} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moviedetail;
