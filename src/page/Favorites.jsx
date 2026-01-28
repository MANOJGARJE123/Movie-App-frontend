import "../css/Favorites.css"
import "../css/Home.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorite() {

    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
        <div>
            <div>
                <h2>Your Favorites</h2>
            </div>
            <div className="movies-grid">
                {favorites.map((movie, idx) => (
                    <MovieCard key={movie.id ?? `${movie.title}-${movie.release_date}-${idx}`} movie={movie} />
                ))}
            </div>
        </div>
        )
    }
    return <div className="favorites-empty">
        <h2>Your Favorites List is Empty</h2>
        <p>Add movies to your favorites to see them here.</p>
    </div>
}

export default Favorite 