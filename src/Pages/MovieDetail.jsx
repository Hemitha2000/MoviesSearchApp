import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDetail() {
  const { imdbID } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=2ba5482d&i=${imdbID}&plot=full`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError("Movie not found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, [imdbID]);

  if (loading) {
    return <div className="p-10 text-center">Loading movie details...</div>;
  }

  if (error) {
    return (
      <div className="p-10 text-center">
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (

      <section
  className={`
    min-h-screen
    p-5
    pt-20 md:pt-5
    ml-0 md:ml-[16.666%]`}
>
        <div className="relative">
            <span className="absolute right-0 left-0 bottom-0 top-0 bg-[#0000007a] "></span>
            <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
          alt={movie.Title}
          className="w-full h-[460px] object-cover object-top"
        />
        <div className="absolute z-[9] top-[50px] left-5 flex gap-3 items-center">
            <div className="overflow-hidden rounded-xl relative">
            <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
          alt={movie.Title}
          className="w-[250px] max-h-[400px] object-cover"
        />
        <span className="absolute top-2 right-2 first-letter:uppercase absolute px-2 py-[7px] bg-[#cd82e7] rounded-full text-white text-[13px] leading-none ">{movie.Type}</span>
            </div>
            <div className="text-white">
                <h1 className="text-3xl font-bold">{movie.Title}</h1>
                <div className="border border-white rounded bg-[#00000082] py-2 px-3 mt-3">
                    <div className="flex flex-wrap items-center gap-2">
                    <i className="fa-solid fa-star text-[#a148c7] text-[20px]"></i> <span className="text-[20px]"><b>{movie.Ratings[0]?.Value}</b></span>
                    <span className="text-[16px]">({movie.imdbVotes} Votes)</span>
                    </div>
                    <div className="flex items-center">
                        <span>{movie.Runtime}</span><span className="w-[7px] h-[7px] bg-white block mx-2 rounded-full"></span>
                        <span>{movie. Genre}</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center mt-2">
                    <p className="bg-[#8a8a8a] px-2 rounded py-1 border-[#767171] border text-[12px]">Released on <span className="block text-[14px]"><b>{movie.Year}</b></span></p>
                     <p className="bg-[#8a8a8a] px-2 rounded py-1 border-[#767171] border text-[12px]">Language<span className="block text-[14px]"><b>{movie.Language}</b></span></p>
                </div>
            </div>
        </div>
        </div>
     

        <div className="p-4">
            <button
        className="text-blue-600 flex justify-center items-center"
        onClick={() => navigate(-1)}
      >
       <span className="relative top-[-2px] mr-1 text-[24px]">←</span>  <span className="text-sm block">Back</span>
      </button>
          <h1 className="text-3xl font-bold capitalize">About {movie.Title} movie</h1>
          <p className="mt-2 text-gray-600">{movie.Plot}</p>
        
        
      </div>
    </section>
  );
}

export default MovieDetail;
