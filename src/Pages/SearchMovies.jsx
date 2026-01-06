import { useState,useEffect } from "react";
import PageTitle from "../Components/pageTitle"
import MovieList from "../Components/MovieList"
import noFile from "../assets/notfound.png"
function SearchMovies() {

  const [searchText, setSearchText] = useState("");
  const [movieList, setmovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [type, setType] = useState("");
  useEffect(() => {
  if (searchText) {
    handleSubmit(1);
  }
}, [type]);
  const handleSubmit = (page = 1 , selectedType = type) => {
    if (!searchText) {
      setmovieList([]);
      setTotalResults(0);
      return;
    }
    console.log(type)
    const typeParam = type ? `&type=${type}` : "";
    fetch(`https://www.omdbapi.com/?apikey=2ba5482d&s=${searchText}&page=${page}${typeParam}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.Search?.length > 0) {
          setmovieList(data.Search);
          setTotalResults(Number(data.totalResults));
          setCurrentPage(page);
        } else {
          setmovieList(data);
          setTotalResults(0);
        }
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };
  const totalPages = Math.ceil(totalResults / 10);
  return (

    <section
  className={`
    p-5
    transition-all duration-300
    pt-20 md:pt-5
    ml-0 md:ml-[16.666%]
    ${movieList.length === 0
      ? "min-h-screen"
      : "h-screen overflow-hidden"}
  `}
>
      <PageTitle title={"Search Movie"} />
      <div className={movieList.length == 0 ? "relative flex min-h-[75vh] transition-all duration-300 ease-in-out  items-center justify-center w-[80%] mx-auto" : "transition-all duration-300 ease-in-out relative flex items-center mt-3 justify-center w-full mx-auto"} >
        <input type="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSubmit(1);
          }
        }} placeholder={"Search Movie Names or Keywords... "} name="searchMovie" className="placeholder-white block w-full bg-[#e0c2ef] text-[18px] border border-[#7532b7] px-5 py-5 " />
        <select
              value={type}
              onChange={(e) => {
               setType(e.target.value)
              }}
              className="mx-2 px-3 w-[200px] py-2 h-[69px] border border-[#7532b7] bg-white text-[16px]"
            >
              <option value="">All</option>
              <option value="movie">Movies</option>
              <option value="series">Series</option>
              <option value="episode">Episodes</option>
            </select>
        <button className="w-[150px] border bg-[#ffe0c8]  text-[#fa913f] border-[#fa913f] text-[18px] uppercase h-[69px]" onClick={() => handleSubmit(1)}><b>
          Search</b></button>
      </div>
      
      {movieList.length > 0 && totalPages > 0 && (
        <div className="relative">
            <h3 className="text-xl ml-5 "> <b>Search Result</b></h3>
          <div className="grid grid-cols-1 gap-4 p-4 pb-[8rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-h-[80vh] overflow-auto">

            {movieList.map((movie) => (
              <MovieList key={movie.imdbID} movie={movie} />
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 absolute bottom-0 bg-white left-0 right-0 p-2">
            <button
              disabled={currentPage === 1}
              onClick={() => handleSubmit(currentPage - 1)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => handleSubmit(currentPage + 1)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {movieList.Response == "False" && (


        <div className="flex items-center justify-center flex-col mt-5"><img src={noFile} alt="nofile" />No Movie to show..</div>


      )}
    </section>


  )
}
export default SearchMovies
