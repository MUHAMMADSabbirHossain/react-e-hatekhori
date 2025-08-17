import { useState } from "react"
import PropTypes from "prop-types"

function MovieForm({ addMovie }) {
    const [movieData, setMovieData] = useState({
        title: "",
        ott: "",
    });

    function handleChange(event) {
        setMovieData({
            ...movieData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(movieData);

        if (!movieData.title.trim() || !movieData.ott.trim()) {
            alert("Please enter movie title and OTT name.");
            return
        }

        addMovie(movieData);

        setMovieData({
            title: "",
            ott: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                id=""
                placeholder="Enter Movie Name..."
                className="mb-4 border rounded-md p-1"
                onChange={handleChange}
            />

            <select
                name="ott"
                id=""
                value={movieData.ott}
                className="border rounded-md p-1"
                onChange={handleChange}
            >
                <option value="">Selete an OTT</option>
                <option value="netflix">Netflix</option>
                <option value="prime">Prime</option>
                <option value="hotstar">Hotstar</option>
                <option value="disney">Disney+</option>
                <option value="zee5">Zee5</option>
                <option value="youtube">Youtube</option>
                <option value="hulu">Hulu</option>
                <option value="amazon">Amazon Prime</option>
                <option value="voot">Voot</option>
                <option value="sonyliv">Sony Liv</option>
                <option value="hoichoi">Hoichoi</option>
                <option value="others">Others</option>
            </select>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    )
}

MovieForm.propTypes = {
    addMovie: PropTypes.func.isRequired,
}

export default MovieForm
