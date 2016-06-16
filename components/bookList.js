import React from 'react';
import Book from './book';

const BookList = (props) => {
    return (
        <section className="gallery">
	      { props.books.map( book => <Book key={book.title} book={book}/>) }
	    </section>
    );
};

export default BookList;
