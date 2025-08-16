import SearchBar from "./SearchBar"
import Filters from "./Filters"

function Queries({
    searchCarsString,
    setSearchCarsString,
    filterCarsFeatured,
    setFilterCarsFeatured }) {
    return (
        <div
            className="flex justify-start items-start my-2"
        >
            <SearchBar
                searchCarsString={searchCarsString}
                setSearchCarsString={setSearchCarsString}
            />
            <Filters
                filterCarsFeatured={filterCarsFeatured} setFilterCarsFeatured={setFilterCarsFeatured}
            />
        </div>
    )
}

export default Queries