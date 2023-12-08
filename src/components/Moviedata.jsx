import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { HelpOutline } from "@mui/icons-material";
const Moviedata = (props) => {
  // const [data, setData] = useState(null);
  const { data } = props;
  // console.log(props);
  // console.log(data);
  return (
    <div>
      {data ? (
        <div className="flex  mt-10 m-auto space-x-14 justify-center">
          <NavLink to={"/screen2"}>
            <div className="h-70 w-70">
              <img src={data.Poster} alt="" />
              <h3>Country: {data.Title}</h3>
              <h3>Genre: {data.Genre}</h3> <h3>Country: {data.Country}</h3>{" "}
            </div>
          </NavLink>
          <NavLink to={"/screen2"}>
            <div className="h-70 w-70">
              <img src={data.Poster} alt="" />
              <h3>Country: {data.Title}</h3>
              <h3>Genre: {data.Genre}</h3> <h3>Country: {data.Country}</h3>
            </div>
          </NavLink>
          <NavLink to={"/screen2"}>
            <div className="h-70 w-70">
              <img src={data.Poster} alt="" />
              <h3>Country: {data.Title}</h3>
              <h3>Genre: {data.Genre}</h3> <h3>Country: {data.Country}</h3>
            </div>
          </NavLink>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Moviedata;
