import ReactStars from 'react-stars'
import PropTypes from 'prop-types'

function MovieItem({
    movie,
    rateMovie,
    toggleWatched,
    deleteMovie,
}) {
    function ratingChange(newRating) {
        rateMovie(movie.id, newRating)
    }

    return (
        <li
            key={movie.id}
            className="p-4 bg-white shadow-xl rounded-lg border border-gray-200 text-gray-600"
        >
            <h3
                className={`font-bold  ${movie.watched ? 'line-through' : ''}`}
            >
                {movie.title}
            </h3>
            <p className=''>OTT: {movie.ott}</p>
            <div className='flex items-center'>
                <ReactStars
                    count={5}
                    value={movie?.rating}
                    onChange={ratingChange}
                    size={24}
                    color2={'#ffd700'}
                />
                <span className='text-xs font-bold'>
                    ({movie.rating})
                </span>
            </div>

            <div className='space-x-2'>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => toggleWatched(movie.id)}
                >
                    {
                        movie.watched
                            ? 'watched'
                            : 'Unwatched'
                    }
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteMovie(movie.id)}
                >
                    Delete
                </button>
            </div>
        </li >
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