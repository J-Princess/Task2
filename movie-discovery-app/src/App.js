import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainbar from "./components/MainBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieList />} />
        {/* <Route path="/movie/:id">
  <Mainbar />
</Route> */}
        <Route path="/movie/:id" element={<Mainbar />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
