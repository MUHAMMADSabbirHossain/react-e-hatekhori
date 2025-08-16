import PropTypes from "prop-types";

function SearchBar({ searchCarsString, setSearchCarsString }) {
    return (
        <input
            type="text"
            name=""
            id=""
            className="mb-4 border rounded-md p-1"
            placeholder="Search cars..."
            value={searchCarsString}
            onChange={(event) => setSearchCarsString(event.target.value)}
        />
    )
}

SearchBar.propTypes = {
    searchCarsString: PropTypes.string.isRequired,
    setSearchCarsString: PropTypes.func.isRequired,
};

export default SearchBar