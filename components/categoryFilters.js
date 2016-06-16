import React from 'react';

const CategoryFilter = (props) => {

    return (
        <ul>
            <li className="placeholder">
                <a data-type="all" href="#0">All</a>
            </li>
            { props.categories.map( category =>
                (
                    <li key={ category.category } onClick={ props.clickHandler.bind(null, category.category) } style={{display: 'inline-style'}}>
                        <a className={category.selected? 'selected': ''} href="#0">{category.category}</a>
                    </li>
                )
            )}
        </ul>
    );
};

export default CategoryFilter;
