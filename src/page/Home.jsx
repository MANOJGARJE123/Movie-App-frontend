import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { title: "Inception", url: "https://example.com/inception.jpg", releaseDate: "2010" },
        { title: "The Matrix", url: "https://example.com/matrix.jpg", releaseDate: "1999" },
        { title: "Interstellar", url: "https://example.com/interstellar.jpg", releaseDate: "2014" },
    ]

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
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard key={movie.title} movie={movie} />  )   
                ))}
            </div>
        </div>
    )
}

export default Home