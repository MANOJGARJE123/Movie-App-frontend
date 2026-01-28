import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react"
import { getPopularMovies } from "../services/api.js";
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    // const movies = getPopularMovies()
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);  

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                setLoading(true);
                setError(null);
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (err) {
                console.log(err);
                setError("Failed to load popular movies.");
            }
            finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, [])
    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchQuery}`);
        setSearchQuery("");
    }

    return (    
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input"
                    value = {searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                <button type="submit">Search</button>
            </form>
            {loading && <p className="status">Loading movies...</p>}
            {error && <p className="status error">{error}</p>}
            <div className="movies-grid">
                {movies
                    .filter((movie) => (movie?.title || "").toLowerCase().includes(searchQuery.trim().toLowerCase()))
                    .map((movie, idx) => (
                        <MovieCard key={movie.id ?? `${movie.title}-${movie.release_date}-${idx}`} movie={movie} />
                    ))}
            </div>
        </div>
    )
}

export default Home