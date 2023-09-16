import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieUnit from "./MovieUnit";
import PosterImage from "./images/Poster.png";
import Navbar from "./NavBar";
import BackImg from "./images/poster-3ed3920a.svg";
import PlayImg from "./images/Play.svg";
import IMDPImg from "./images/imbp.png";
import TomatoImg from "./images/image (1).webp";
import Mainbar from "./MainBar";
import SeeImg from "./images/Chevron right.svg";
import Footer from "./Footer";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  let apiKey = "27379da32e0ad1910ce97a137ffcc04b";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=27379da32e0ad1910ce97a137ffcc04b
    `)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Data:", data);
        setMovies(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [params, apiKey]);

  const movie = movies.length > 0 ? movies[0] : null;

  return (
    <div className="">
      <section
        className="container-fluid sector w-100"
        style={{
          backgroundImage: movie
            ? `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`
            : "{PosterImg}",
        
        }}
      >
        <Navbar />

        {movie && (
          <div
            className="ward text-start"
          >
            <div className="card-sm-body text-light-emphasis">
              <h1 className="card-title text-light">{movie.original_title}</h1>
              <div className="d-flex text-light my-4">
                <img
                  src={IMDPImg}
                  className=""
                  alt="..."
                  style={{ width: "35px", height: "17px" }}
                />
                <p style={{ margin: "-4px 17px 0px", fontWeight: "bold" }}>
                  {movie.popularity} / 100
                </p>
                <img
                  src={TomatoImg}
                  className=""
                  alt="..."
                  style={{ width: "16px", height: "17px" }}
                />
                <p style={{ margin: "-4px 17px 0px", fontWeight: "bold" }}>
                  {movie.popularity}%
                </p>
              </div>

              <p className="card-text text-light">{movie.overview}</p>
              <a
                href="#"
                className="btn"
                style={{
                  backgroundColor: "var(--rose-700, #BE123C)",
                  display: "inline-flex",
                }}
              >
                <img src={PlayImg} alt="Logo" />
                <h4 style={{ color: "#ffffff", margin: "0px 7px" }}>
                  {" "}
                  Watch trailer
                </h4>
              </a>
            </div>
          </div>
        )}
      </section>
      <div className="movie-list container-fluid ">
        <div className="d-flex my-4 w-100">
          <h4 className="mx-3 text-start w-75 fw-bold">Featured Movie</h4>
          <a href="#" className="d-flex pend">
            <p className="mx-5 ">See more</p>
            <img src={SeeImg} alt="See More" style={{ width: "20px", height: "23px" }}
            />{" "}
          </a>
        </div>
        <div className="row mx-3 p-2 ">
          {movies.map((movie) => (
            <MovieUnit key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieList;
