import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMDPImg from "./images/imbp.png";
import TomatoImg from "./images/image (1).webp";
import LoveImg from "./images/Favorite.svg";

const MovieUnit = ({ movie }) => {
  return (
    <div className="card p-2 text-start m-3" style={{ width: "18rem",  }} data-testid="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          className="card-img-top wow"
          alt={movie.title}
          data-testid="movie-poster"
        />
        <img
          src={LoveImg}
          className="fav"
          alt="Favourite"
          data-testid="movie-poster"
          style={{ width: "6rem",  }}
        />
      </Link>
      <div className="card-body">
      <p className="card-text" data-testid="movie-release-date">
          {movie.origin_country} {new Date(movie.release_date).toUTCString()}
        </p>
        <h2 className="card-title" data-testid="movie-title">
          {movie.title}
        </h2>
        <div className="d-flex my-4">
          <img
            src={IMDPImg}
            className=""
            alt="..."
            style={{ width: "35px", height: "17px" }}
          />
          <p style={{ margin: "-4px 13px 0px" }}>{movie.popularity} / 100</p>
          <img
            src={TomatoImg}
            className=""
            alt="..."
            style={{ width: "16px", height: "17px" }}
          />
          <p style={{ margin: "-4px 10px 0px" }}>{movie.popularity}%</p>
        </div>
        <p className="text-dark">{movie.tagline}</p>
      </div>
    </div>
  );
};

export default MovieUnit;
