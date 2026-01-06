import { Routes, Route } from "react-router-dom";
import SearchMovies from "./Pages/SearchMovies"
import MovieDetail from "./Pages/MovieDetail";
import noFile from "./assets/notfound.png"
function PageRoutes() {

  return (
    <Routes>
      <Route index path="/" element={<SearchMovies />} />
      <Route  path="/movie/:imdbID" element={<MovieDetail />} />
       <Route  path="/details" element={
        <section className={` p-5 min-h-screen flex flex-wrap items-center justify-center pt-20 md:pt-5 ml-0 md:ml-[16.666%]`}>    
             <div className="flex flex-col justify-center items-center"><img width="150px" src={noFile} alt="noFile" />
          <h1 className="text-[25px] text-gray-500"><b>
            Page Underconstruction</b></h1>
          </div>
        </section>
       } />
        <Route  path="/favorite" element={
        <section className={` p-5 min-h-screen flex flex-wrap items-center justify-center pt-20 md:pt-5 ml-0 md:ml-[16.666%]`}>    
             <div className="flex flex-col justify-center items-center"><img width="150px" src={noFile} alt="noFile" />
          <h1 className="text-[25px] text-gray-500"><b>
            Page Underconstruction</b></h1>
          </div>
        </section>
       } />
     
   </Routes>
  )
}
export default PageRoutes
