import PropTypes from 'prop-types'
import BookDeatils from './BookDeatils'
import FeatureBook from './FeatureBook'

function BookRow({ book }) {
    return (
        <>
            <BookDeatils
                title={book.title}
                author={book.author}
            />
            <FeatureBook />
        </>
    )
}

BookRow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }).isRequired
};

export default BookRow
