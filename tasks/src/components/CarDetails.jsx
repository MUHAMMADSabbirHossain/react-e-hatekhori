import PropTypes from 'prop-types'

function CarDetails({ car }) {
    return (
        <>
            <h2 className='text-xl font-semibold my-2'>{car?.title}</h2>
            <p><span className='font-semibold'>Brand: </span>{car?.brand}</p>
            <p><span className='font-semibold'>Year: </span> {car?.year}</p>
            <p><span className='font-semibold'>Price: </span> ${car?.price}</p>
            <p><span className='font-semibold'>Features: </span>{car?.isPremium ? 'Premium' : 'Regular'}</p>
        </>
    )
}

CarDetails.propTypes = {
    car: PropTypes.shape({
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
    }),
};

export default CarDetails