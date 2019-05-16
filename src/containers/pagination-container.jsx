import React from 'react';

import PaginationComponent from '../components/pagination-comp';

import MoviesDataJson from '../config/movies.json';

export default class PaginationContainer extends React.Component {
    render() {
        return (
            <PaginationComponent paginationList={MoviesDataJson} />
        )
    }
}