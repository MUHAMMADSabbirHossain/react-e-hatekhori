import PropTypes from "prop-types"

function Filter({ filterQuery, setFilterQueries }) {
    return (
        <section className="flex justify-center my-4">
            <form>

            </form>
            <div className="space-x-2">
                <button
                    className="px-4 py-2 bg-gray-300 rounded"
                    onClick={() => setFilterQueries({ ...filterQuery, watch: null })}
                >
                    All
                </button>
                <button
                    className="px-4 py-2 bg-green-400 rounded"
                    onClick={() => setFilterQueries({ ...filterQuery, watch: true })}
                >
                    Watched
                </button>
                <button
                    className="px-4 py-2 bg-yellow-400 rounded"
                    onClick={() => setFilterQueries({ ...filterQuery, watch: false })}
                >                    UnWatched
                </button>
            </div>
        </section>
    )
}

Filter.propTypes = {
    filterQuery: PropTypes.shape({
        title: PropTypes.string,
        ott: PropTypes.string,
        rating: PropTypes.number,
        watch: PropTypes.bool
    }),
    setFilterQueries: PropTypes.func
};

export default Filter