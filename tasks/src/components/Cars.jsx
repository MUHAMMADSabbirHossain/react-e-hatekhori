import CarList from './CarList'
import Header from './Header'
import Queries from './Queries'
import cars from "../../requirements/cars"

function Cars() {
    // console.log(cars);

    return (
        <div
            className='p-1 sm:p-5'
        >
            <Header />
            <Queries />
            <CarList
                cars={cars}
            />
        </div>
    )
}

export default Cars