import React from 'react';
import SearchField from './searchField';

const Sidebar = (props) => {
    return (
        <div className={ props.navClosed? 'filter filter-is-visible': 'filter' }>
			  <form>
				<div className="filter-block">
					<h4>Search</h4>

					<SearchField search={props.search} />
				</div>

        </form>
        <a href="#0" className="close" onClick={ props.closeSideBar }>Close</a>
      </div>
    );
};

export default Sidebar;
