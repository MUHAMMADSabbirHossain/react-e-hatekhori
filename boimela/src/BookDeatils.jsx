import PropTypes from "prop-types";

function BookDeatils({ title, author }) {
    return (
        <div>
            <h2
                className="text-lg font-semibold"
            >
                {title}
            </h2>
            <p
                className="text-gray-600"
            >
                {author}
            </p>
        </div>
    )
}

BookDeatils.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default BookDeatils