import PropTypes from "prop-types"

function Filters({ filterCarsFeatured, setFilterCarsFeatured }) {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                name=""
                id="premiumFilter"
                className="ml-3 mr-1 h-8 w-8"
                checked={filterCarsFeatured}
                onChange={(event) => setFilterCarsFeatured(event.target.checked)}
            />
            <label htmlFor="premiumFilter"
                className="text-sm text-gray-600 font-semibold">Show Premium Only</label>
        </div>
    )
}

Filters.propTypes = {
    filterCarsFeatured: PropTypes.bool.isRequired,
    setFilterCarsFeatured: PropTypes.func.isRequired
};

export default Filters