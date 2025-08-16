import CarDetails from "./CarDetails";
import PropTypes from "prop-types";

function CarList({ cars }) {

    return (
        <ul
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
            {
                cars.map((car, index) => <li
                    key={car?.id}
                    className="p-4 bg-white shadow-xl rounded-lg">
                    <CarDetails
                        car={car}
                    />
                </li>)
            }
        </ul>
    )
}

CarList.propTypes = {
    cars: PropTypes.array.isRequired,
};

export default CarList