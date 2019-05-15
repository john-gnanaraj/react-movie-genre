import React from 'react';

import '../../src/styles.css';

import LeftNavContainer from './left-nav-container';

import FilteringTableContainer from './filtering-table-container';

import PaginationContainer from './pagination-container';

class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="main-table-container">
                    <div className="menu-n-table">
                        <LeftNavContainer />
                        <FilteringTableContainer />
                    </div>
                    <PaginationContainer />
                </div>
            </div>
        )
    }
}

export default MainContainer;