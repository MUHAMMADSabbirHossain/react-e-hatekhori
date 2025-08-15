import Header from "./Header";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import { useState } from "react";

// Mock data for books
const BOOKS = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        featured: false,
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        featured: false
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        featured: false,
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        featured: false,
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        featured: false,
    },
];

function Boimela() {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState(BOOKS);

    function toggleFeatured(bookId) {
        // console.log(bookId);

        setBooks(
            books.map((book) =>
                book.id === bookId ?
                    { ...book, featured: !book.featured } :
                    book)
        );
    }

    return (
        <div
            className="mx-auto p-4"
        >
            <Header />
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <BookList
                searchTerm={searchTerm}
                books={books}
                toggleFeatured={toggleFeatured}
            />
        </div>
    )
}

export default Boimela