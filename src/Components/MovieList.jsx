// import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function MovieList({ movie }) {
     const navigate = useNavigate();
     const openSingleMovie= (data) => {
        navigate(`/movie/${data.imdbID}`);
     }
  return (
    <div className="rounded-lg border bg-white shadow-sm hover:shadow-md transition relative overflow-hidden bg-black" onClick={() => openSingleMovie(movie)}>
        <img src={movie.Poster} alt={movie.Title} />
        <h3 className="text-white px-[15px] py-[10px] text-sm flex flex-wrap items-center">{movie.Title} <span className="w-[7px] h-[7px] bg-white block mx-2 rounded-full"></span> <span>{movie.Year}</span></h3>
        <span className="first-letter:uppercase absolute top-2 right-[9px] px-2 py-[7px] bg-[#cd82e7] rounded-full text-white text-[13px] leading-none">{movie.Type}</span>
    </div>
  );
}

export default MovieList;