import { Star } from "lucide-react";
import PropTypes from "prop-types";

function FeatureBook({ book, toggleFeatured }) {
    return (
        <button
            onClick={() => toggleFeatured(book?.id)}
        >
            <Star color={book.featured ? "green" : "black"} />
        </button >
    )
}

FeatureBook.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        featured: PropTypes.bool,
    }),
    toggleFeatured: PropTypes.func.isRequired,
};

export default FeatureBook