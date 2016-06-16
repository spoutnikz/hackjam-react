import React from 'react';

const SearchField = (props) => {
    return (
        <div className="filter-content">
            <input type="search" placeholder="title, price..." onChange={ props.search }/>
        </div>
    );
};

export default SearchField;
