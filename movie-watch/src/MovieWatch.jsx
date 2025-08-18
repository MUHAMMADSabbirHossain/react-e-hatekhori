import { useState } from "react";
import Filter from "./Filter";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function MovieWatch() {
    const [movies, setMovies] = useState(JSON.parse(localStorage.getItem("movies")) || []);

    const [filterQueries, setFilterQueries] = useState({
        title: "",
        ott: "",
        rating: null,
        watch: null,
    });

    function addMovie({ title, ott }) {
        setMovies((prev) => {
            const newMovies = [...prev, {
                id: crypto.randomUUID(),
                title,
                ott,
                rating: null,
                watched: false,
            }];

            localStorage.setItem("movies", JSON.stringify(newMovies));

            return newMovies;
        });
    }

    function rateMovie(id, rating) {
        setMovies((prev) => {
            const updatedMovies = prev.map((movie) => movie?.id === id ?
                { ...movie, rating } :
                movie);

            localStorage.setItem("movies", JSON.stringify(updatedMovies));

            return updatedMovies;
        });
    }

    function toggleWatched(id) {
        setMovies((prev) => {
            const updatedMovies = prev.map((movie) => movie?.id === id ?
                { ...movie, watched: !movie.watched } :
                movie);

            localStorage.setItem("movies", JSON.stringify(updatedMovies));

            return updatedMovies;
        });
    }

    function deleteMovie(id) {
        setMovies((prev) => {
            const updatedMovies = prev.filter((movie) => movie?.id !== id)

            localStorage.setItem("movies", JSON.stringify(updatedMovies));

            return updatedMovies;
        });
    }

    return (
        <section className="px-1 sm:px-5">
            <Heading />
            <MovieForm
                addMovie={addMovie}
            />
            <Filter
                filterQueries={filterQueries}
                setFilterQueries={setFilterQueries}
            />
            <MovieList
                movies={movies}
                rateMovie={rateMovie}
                toggleWatched={toggleWatched}
                deleteMovie={deleteMovie}
                filterQueries={filterQueries}
            />
        </section>
    );
}

export default MovieWatch;