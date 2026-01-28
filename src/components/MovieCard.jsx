import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"  

function MovieCard({movie}) {
    const{isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id)

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : ""

    function onFavoriteClick() {
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {posterUrl ? (
                    <img src={posterUrl} alt={movie.title} />
                ) : (
                    <div className="no-poster">No Image</div>
                )}
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date }</p>
            </div>
        </div>
    )
}

export default MovieCard