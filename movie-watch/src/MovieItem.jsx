import ReactStars from 'react-stars'
import PropTypes from 'prop-types'

function MovieItem({ movie, rateMovie, toggleWatched, deleteMovie }) {
    function ratingChange(newRating) {
        rateMovie(movie.id, newRating)
    }

    return (
        <li
            key={movie.id}
            className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100 
                       flex flex-col gap-3 sm:gap-4 transition-all duration-300 hover:shadow-2xl"
        >
            {/* Title */}
            <h3
                className={`text-lg sm:text-xl font-semibold text-gray-800 
                           ${movie.watched ? 'line-through text-gray-400' : ''}`}
            >
                {movie.title}
            </h3>

            {/* OTT Info */}
            <p className="text-sm sm:text-base text-gray-500">
                OTT: <span className="font-medium text-gray-700">{movie.ott}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
                <ReactStars
                    count={5}
                    value={movie?.rating}
                    onChange={ratingChange}
                    size={20}
                    color2={'#facc15'} // Tailwind yellow-400
                />
                <span className="text-xs sm:text-sm font-semibold text-gray-600">
                    ({movie.rating})
                </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-2">
                <button
                    className="flex-1 sm:flex-none bg-green-500 hover:bg-green-600 
                               text-white text-sm sm:text-base font-medium py-2 px-4 
                               rounded-xl shadow-md transition-all duration-300"
                    onClick={() => toggleWatched(movie.id)}
                >
                    {movie.watched ? 'Watched ✅' : 'Unwatched 👀'}
                </button>
                <button
                    className="flex-1 sm:flex-none bg-red-500 hover:bg-red-600 
                               text-white text-sm sm:text-base font-medium py-2 px-4 
                               rounded-xl shadow-md transition-all duration-300"
                    onClick={() => deleteMovie(movie.id)}
                >
                    Delete 🗑️
                </button>
            </div>
        </li>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ott: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        watched: PropTypes.bool.isRequired,
    }).isRequired,
    rateMovie: PropTypes.func.isRequired,
    toggleWatched: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
}

export default MovieItem
