import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;  // Replace with your actual TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';




const MovieList= async ()=>{
try{

   const options={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDNiNDIxYjRhZGIxNGRlYTllNDdkNDc2MWY2YzU5NCIsIm5iZiI6MTcyNTgxNDU3NC44Njg5NDgsInN1YiI6IjY2ZDgwZGMwOGU5MzQxMGQ3ODE4MjNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQYNMIy7wO_46jBZJS5zDI0fQL4236Crm0bPoMEjReY'
    }
   };

   const response= await fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
    const data=await response.json();  //  .catch(err => console.error(err));
  
   return data.results;
}
catch(error){
   console.log(`Error Fectching Movie list: ${error}`);
   return null;
}

}



const FetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        page:3,
      },
    });
  
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export {MovieList};

export default FetchPopularMovies;