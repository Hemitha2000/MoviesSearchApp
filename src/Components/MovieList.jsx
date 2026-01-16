// import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function MovieList({ movie,search}) {
     const navigate = useNavigate();
     const openSingleMovie= (data) => {
        navigate(`/movie/${data.imdbID}?${search}`);
     }
  return (
    <div className="rounded-lg border shadow-sm hover:shadow-md transition relative bg-gray-800" onClick={() => openSingleMovie(movie)}>
      
        <img className="w-full object-cover" src={movie.Poster} alt={movie.Title} />
        <h3 className="text-white px-[15px] py-[10px] text-sm flex items-center"><span>
          {movie.Title}</span> <span className="w-[7px] h-[7px] bg-white block mx-2 rounded-full"></span> <span>{movie.Year}</span></h3>
        <span className="first-letter:uppercase absolute top-2 right-[9px] px-2 py-[7px] bg-[#cd82e7] rounded-full text-white text-[13px] leading-none">{movie.Type}</span>
    </div>
  );
}

export default MovieList;