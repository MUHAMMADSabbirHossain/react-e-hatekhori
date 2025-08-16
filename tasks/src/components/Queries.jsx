import SearchBar from "./SearchBar"
import Filters from "./Filters"

function Queries() {
    return (
        <div
            className="flex justify-start items-start my-2"
        >
            <SearchBar />
            <Filters />
        </div>
    )
}

export default Queries