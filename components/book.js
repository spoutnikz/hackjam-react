import React from 'react';

const Book = (props) => {
    return (
        <li key={ props.book.title }><img src={ props.book.cover }/></li>
    );
};

export default Book;
