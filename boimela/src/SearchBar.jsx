import PropTypes from "prop-types";

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input
            type="text"
            value={searchTerm}
            name=""
            id=""
            placeholder="Search Books..."
            className="mb-4 border rounded-md p-1 w-full"
            onChange={
                (event) => setSearchTerm(event.target.value)
            }
        />
    )
}

SearchBar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar