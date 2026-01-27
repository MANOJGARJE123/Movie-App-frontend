import MovieCard from "../components/MovieCard"
import {useState} from "react"
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { title: "The Matrix", url: "https://example.com/matrix.jpg", releaseDate: "1999" },
        { title: "Interstellar", url: "https://example.com/interstellar.jpg", releaseDate: "2014" },
        { title: "harry potter", url: "https://example.com/inception.jpg", releaseDate: "2011" },
        { title: "dangal", url: "https://example.com/inception.jpg", releaseDate: "2012" },
        { title: "karate", url: "https://example.com/inception.jpg", releaseDate: "2014" },
        { title: "kDrama", url: "https://example.com/inception.jpg", releaseDate: "2010" },
        { title: "UFC", url: "https://example.com/inception.jpg", releaseDate: "2010" },
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        // Submit preserved; filtering happens live via searchQuery
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
            <div className="movies-grid">
                {movies
                    .filter((movie) => movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase()))
                    .map((movie, idx) => (
                        <MovieCard key={`${movie.title}-${movie.releaseDate}-${idx}`} movie={movie} />
                    ))}
            </div>
        </div>
    )
}

export default Home