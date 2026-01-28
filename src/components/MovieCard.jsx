import "../css/MovieCard.css"

function MovieCard({movie}) {

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : ""

    function onFavoriteClick() {
         alert("Favorite clicked!")
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
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard