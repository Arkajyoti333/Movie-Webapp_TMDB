import { useEffect, useState } from "react";
import { MovieList } from "../../TMDB_Services/tmdbServices";


const Home = () => {
  const [moviesList,setMovieList]=useState([]);
  useEffect(()=>{
       const fetchmovieList=async()=>{
           const listData= await MovieList();
           setMovieList(listData);
       }
       fetchmovieList();
  },[])

  console.log(`MovieList:${moviesList[0].id}`);
  return (
  <>
     <div className="flex justify-center text-3xl font-semibold text-white mt-40 min-h-screen">
           Welcome to the Home Page !
          {
            moviesList.map((list)=>{
              <div key={list.id} className="text-white">List:{list}</div>
            })
          }

     </div>
  </>
);

};

export default Home;
