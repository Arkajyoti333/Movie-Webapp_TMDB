import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;  // Replace with your actual TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

const FetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
  
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};
export default FetchPopularMovies;