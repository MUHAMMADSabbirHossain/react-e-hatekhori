import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

function MovieList({
    movies,
    rateMovie,
    toggleWatched,
    deleteMovie,
    filterQueries
}) {
    const filterMovies = [];

    movies.forEach(movie => {
        if (
            (filterQueries?.watch === true && movie.watched) ||
            (filterQueries?.watch === false && !movie.watched) ||
            filterQueries?.watch === null
        ) {
            filterMovies.push(
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    rateMovie={rateMovie}
                    toggleWatched={toggleWatched}
                    deleteMovie={deleteMovie}
                />
            );
        }
    });

    return (
        <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
            {filterMovies}
        </ul>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            ott: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            watched: PropTypes.bool.isRequired,
        }),
    ),
    rateMovie: PropTypes.func.isRequired,
    toggleWatched: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
    filterQueries: PropTypes.shape({
        title: PropTypes.string,
        ott: PropTypes.string,
        rating: PropTypes.number,
        watch: PropTypes.bool
    }),
};

export default MovieList