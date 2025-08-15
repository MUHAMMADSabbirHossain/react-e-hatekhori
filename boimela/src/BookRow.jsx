import PropTypes from 'prop-types'
import BookDeatils from './BookDeatils'
import FeatureBook from './FeatureBook'

function BookRow({ book, toggleFeatured }) {
    return (
        <div className='flex items-center justify-between p-4 bg-white shadow rounded-lg'>
            <BookDeatils
                title={book.title}
                author={book.author}
            />
            <FeatureBook
                book={book}
                toggleFeatured={toggleFeatured}
            />
        </div>
    )
}

BookRow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
};

export default BookRow
