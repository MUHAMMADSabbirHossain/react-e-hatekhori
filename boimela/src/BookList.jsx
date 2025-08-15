import BookRow from './BookRow'
import PropTypes from 'prop-types'

function BookList({ searchTerm, books, toggleFeatured }) {
    const rows = [];

    books.forEach((book) => {
        if (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase())) {
            rows.push(<BookRow key={book?.id} book={book} toggleFeatured={toggleFeatured} />);
        }
    });

    return rows;

    /* return (
        <ul
            className='space-y-4'>
            {
                books.map((book, index) => (
                    <li
                        key={index}
                        className='flex items-center justify-between p-4 bg-white shadow rounded-lg'
                    >
                        <BookRow
                            book={book}
                        />
                    </li>
                ))
            }
        </ul>
    ) */
}

BookList.proptypes = {
    searchTerm: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    toggleFeatured: PropTypes.func.isRequired,
};

export default BookList