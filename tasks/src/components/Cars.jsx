import CarList from './CarList'
import Header from './Header'
import Queries from './Queries'
import carsData from "../../requirements/cars"
import { useState } from 'react'

function Cars() {
    // console.log(cars);
    const [cars, setCars] = useState(carsData);
    const [searchCarsString, setSearchCarsString] = useState("");
    const [filterCarsFeatured, setFilterCarsFeatured] = useState(false);

    return (
        <div
            className='px-1 sm:px-5'
        >
            <Header />
            <Queries
                searchCarsString={searchCarsString}
                setSearchCarsString={setSearchCarsString}
                filterCarsFeatured={filterCarsFeatured}
                setFilterCarsFeatured={setFilterCarsFeatured}
            />
            <CarList
                cars={cars}
                searchCarsString={searchCarsString}
                filterCarsFeatured={filterCarsFeatured}
            />
        </div>
    )
}

export default Cars