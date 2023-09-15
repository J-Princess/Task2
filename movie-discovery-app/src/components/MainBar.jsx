import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TvShow from "./images/TV Show.png";
import MovieImg from "./images/Movie Projector.png";
import HomeImg from "./images/Home.png";
import CalImg from "./images/Calendar.png";
import LogoImg from "./images/image (2).webp";
import LogOutImg from "./images/Logout.png";
import PlayImg from "./images/Play.svg";
import ListImg from "./images/List.png";
import TtkImg from "./images/Two Tickets.png";
import StarImg from "./images/Star.png";
import RectImg from "./images/Group 52.png";
import ArrowImg from "./images/Expand Arrow.png";

const Mainbar = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");

  let apiKey = "27379da32e0ad1910ce97a137ffcc04b";
  useEffect(() => {
 
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=27379da32e0ad1910ce97a137ffcc04b`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("movie Data:", data);
        console.log("Fetching movie details for ID:", id);
        setMovie(data);
        setLoading(false);


        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
          .then((response) => response.json())
          .then((genreData) => {
            const genreNames = data.genres.map((genreId) => {
              const genreInfo = genreData.genres.find(
                (genre) => genre.id === genreId
              );
              return genreInfo ? genreInfo.name : "";
            });
            setGenre(genreNames.join(", "));
          })
          .catch((genreError) => {
            console.error("Error fetching genre:", genreError);
          });

        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`
        )
          .then((response) => response.json())
          .then((durationData) => {
            setDuration(durationData.runtime + " minutes");
          })
          .catch((durationError) => {
            console.error("Error fetching duration:", durationError);
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }
  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 round ">
            <div className="my-5 mx-4">
              <Link to="/" className="navbar-brand d-flex">
                <img
                  src={LogoImg}
                  alt="Logo"
                  width="50"
                  height="50"
                  className="d-inline-block align-text-top"
                />{" "}
                <h2 style={{ margin: "5px 20px" }}>MovieBox </h2>
              </Link>
            </div>
            <div className="py-3 my-1 container">
              <div className="d-flex m-5">
                <img src={HomeImg} className="" alt="Movies" />
                <h5 style={{ margin: "0px 17px 0px", fontWeight: "bold" }}>
                  Home
                </h5>
              </div>
              <div className="d-flex m-5">
                <img
                  src={MovieImg}
                  alt="Movies"
                  className="d-inline-block align-text-top"
                />
                <h5 style={{ margin: "0px 17px 0px", fontWeight: "bold" }}>
                  Movies
                </h5>
              </div>
              <div className="d-flex m-5">
                <img
                  src={TvShow}
                  alt="TV Series"
                  className="d-inline-block align-text-top"
                />
                <h5 style={{ margin: "0px 17px 0px", fontWeight: "bold" }}>
                  TV Series
                </h5>
              </div>
              <div className="d-flex m-5">
                <img
                  src={CalImg}
                  alt="Upcoming"
                  className="d-inline-block align-text-top"
                />
                <h5 style={{ margin: "0px 17px 0px", fontWeight: "bold" }}>
                  Upcoming
                </h5>
              </div>
            </div>
            <div className="container py-5  divtain text-start">
              <h6>Play movie quizes and earn free tickets</h6>
              <p>50k people are playing now</p>
              <button>Start playing</button>
            </div>

            <div className="d-flex m-5 container pb-5">
              <img
                src={LogOutImg}
                alt="TV Series"
                className="d-inline-block align-text-top"
              />
              <h5 style={{ margin: "4px 5px 0px", fontWeight: "bold" }}>
                Log out
              </h5>
            </div>
          </div>

          <div className="col m-5">
            <div
              className="wHero"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
              }}
            >
              {" "}
              <img
                src={PlayImg}
                alt="Play Logo"
                style={{ width: "50px", height: "50px" }}
              />
              <p>Watch Trailer</p>
            </div>
            <div className="row mt-4">
              <div className="col-8">
                <div className=" d-flex text-start">
                  <h3 data-testid="movie-title">{movie.title}</h3>
                  <li className="mx-3 mt-1" data-testid="movie-release-date">
                    {" "}
                    {new Date(movie.release_date).toUTCString()}
                  </li>

                  <li className="mx-1  mt-1">PG-13</li>
                  <li className="mx-1  mt-1" data-testid="movie-runtime">
                    {duration}
                  </li>
                  <p className="mx-3  mt-1">Genre: {genre}</p>
                </div>
                <div className="text-start mt-3">
                  <p data-testid="movie-overview">{movie.overview}</p>
                </div>
              </div>
              <div className="col mx-4">
                <div className="d-flex tend">
                  <img
                    src={StarImg}
                    alt="Star"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <h5 style={{ color: "#E8E8E8" }}>8.5</h5>
                  <p>| 350k</p>
                </div>
                <button className="d-flex text-center btn col4 my-2 ">
                  <img
                    src={TtkImg}
                    alt="Logo"
                    style={{ width: "20px", height: "20px", marginTop: "3px" }}
                  />
                  <p className="mx-1">See Showtimes</p>
                </button>
                <button className="d-flex btn text-center cols">
                  <img
                    src={ListImg}
                    alt="Logo"
                    style={{ width: "20px", height: "20px", marginTop: "3px" }}
                  />
                  <p className="mx-1">More watch options</p>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                {" "}
                <div className="text-start my-3">
                  <p>
                    Director :{" "}
                    <span style={{ color: " #BE123C" }}>Joseph Kosinski </span>
                  </p>
                  <p>
                    Writers :{" "}
                    <span style={{ color: " #BE123C" }}>
                      Jim Cash, Jack Epps Jr, Peter Craig{" "}
                    </span>
                  </p>
                  <p>
                    Stars :{" "}
                    <span style={{ color: " #BE123C" }}>
                      Tom Cruise, Jennifer Connelly, Miles Teller{" "}
                    </span>
                  </p>
                  <div className="d-flex last my-5">
                    {" "}
                    <button className=" btn col3 text-light">
                      Top rated movie #65
                    </button>
                    <h6 className="mx-5 my-3">Awards 9 nominations</h6>
                    <div className="mx-5 ">
                      <img
                        src={ArrowImg}
                        alt="Expand"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginTop: "20px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mx-4">
                {" "}
                <img src={RectImg} alt="Logo" className="final" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainbar;
