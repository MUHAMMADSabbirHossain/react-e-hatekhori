import CarDetails from "./CarDetails";
import PropTypes from "prop-types";

function CarList({
    cars,
    searchCarsString,
    filterCarsFeatured
}) {
    const searchCarsResult = [];
    const queryString = searchCarsString.toLowerCase(); // Convert the query string to lowercase

    cars.forEach((car, index) => {
        const queryConditions = car?.title.toLowerCase().includes(queryString) ||
            car?.brand.toLowerCase().includes(queryString) ||
            car?.year.toString().includes(queryString) ||
            car?.price.toString().includes(queryString); // Check if the car title, brand, year, or price includes the query string

        if (queryConditions) {
            filterCarsFeatured === true ?
                searchCarsResult.push(
                    car?.isPremium === true && <li
                        key={car?.id}
                        className="p-4 bg-white shadow-xl rounded-lg border border-gray-200"
                    >
                        <CarDetails car={car} />
                    </li>
                ) :
                searchCarsResult.push(
                    <li
                        key={car?.id}
                        className="p-4 bg-white shadow-xl rounded-lg border border-gray-200"
                    >
                        <CarDetails car={car} />
                    </li>
                );
        }
    });

    return (
        searchCarsResult.length === 0 ?
            <div className="text-center text-2xl text-red-600 font-bold">No Cars Found. Try Again.</div> :
            <ul
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
            >
                {searchCarsResult}
            </ul>
    )
}

CarList.propTypes = {
    cars: PropTypes.array.isRequired,
    serachCarsString: PropTypes.string,
};

export default CarList