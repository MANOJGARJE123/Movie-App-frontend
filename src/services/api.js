const API_KEY = process.env.MOVIE_API;
const BASE_URL = process.env.BASE_URL;

export const fetchMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
}