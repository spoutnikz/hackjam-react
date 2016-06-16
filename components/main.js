import React, { Component } from 'react';
import filters from '../mocks/filters';
import books from '../mocks/books';
import BookList from './bookList';
import CategoryFilter from './categoryFilters';
import Sidebar from './sidebar';

class Main extends Component {
  constructor () {
    super();
    this.closeSideBar = this.closeSideBar.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
    this.search = this.search.bind(this);
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      books,
      filters,
    };
  }

  selectTab ( category ) {
    this.setState({
      filters: filters.map(filter => {
        if (filter.category === category) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
        return filter;
      }),
     books: category === 'All'? books : books.filter( book => {
      return book.category === category;
     }),
    });
  }

  closeSideBar () {
    this.setState({
      navClosed: false
    });
  }

  openSideBar () {
    this.setState({
      navClosed: true
    });
  }

  search (input) {
    console.log(input.target.value);
  }

  render () {
    const { books, filters } = this.state;

    let className = 'gallery';

    if ( this.state.navClosed ) {
      className += ' filter-is-visible';
    }

    return (
    <main className="main-content">
      <div className="tab-filter-wrapper">
        <div className="tab-filter">
          <CategoryFilter categories={this.state.filters} clickHandler={this.selectTab} />
        </div>
      </div>

      <BookList books={this.state.books} />
			<Sidebar search={this.search} closeSideBar={this.closeSideBar} navClosed={this.state.navClosed} />

      <a href="#0" className="filter-trigger" onClick={ this.openSideBar }>Filters</a>
    </main>
   );
  }
}

export default Main;
