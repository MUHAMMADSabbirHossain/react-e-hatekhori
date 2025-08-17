import { useState } from "react";
import Filter from "./Filter";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function MovieWatch() {
    const [movies, setMovies] = useState([
        {
            id: crypto.randomUUID(),
            title: "The Shawshank Redemption",
            ott: "Netflix",
            rating: null,
            watched: false
        },
        {
            id: crypto.randomUUID(),
            title: "The Godfather",
            ott: "Netflix",
            rating: null,
            watched: true,
        },
        {
            id: crypto.randomUUID(),
            title: "The Dark Knight",
            ott: "Netflix",
            rating: null,
            watched: false
        },
        {
            id: crypto.randomUUID(),
            title: "The Godfather: Part II",
            ott: "Netflix",
            rating: null,
            watched: true,
        },
        {
            id: crypto.randomUUID(),
            title: "12 Angry Men",
            ott: "Netflix",
            rating: null,
            watched: false
        },
    ]);

    function addMovie({ title, ott }) {
        setMovies([...movies, {
            id: crypto.randomUUID(),
            title,
            ott,
            rating: null,
            watched: false,
        }]);
    }

    function rateMovie(id, rating) {
        setMovies(movies.map((movie) => (
            movie.id === id ?
                { ...movie, rating } :
                movie)
        ));
    }

    function toggleWatched(id) {
        setMovies(movies.map((movie) => (
            movie.id === id ?
                { ...movie, watched: !movie.watched } :
                movie)
        ));
    }

    function deleteMovie(id) {
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    return (
        <>
            <Heading />
            <MovieForm
                addMovie={addMovie}
            />
            <Filter />
            <MovieList
                movies={movies}
                rateMovie={rateMovie}
                toggleWatched={toggleWatched}
                deleteMovie={deleteMovie}
            />
        </>
    );
}

export default MovieWatch;