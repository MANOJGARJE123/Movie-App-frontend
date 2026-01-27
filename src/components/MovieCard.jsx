import "../css/MovieCard.css"

function MovieCard({movie}) {

    function onFavoriteClick() {
         alert("Favorite clicked!")
        }

    return (
        <div className="movie-card" align="center">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className ="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}

export default MovieCard