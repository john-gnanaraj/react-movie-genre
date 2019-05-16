import React from 'react';

import FilteringTableComponent from '../components/filtering-table';

import MoviesDataJson from '../config/movies.json';

export default class FilteringTableContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            
        }
        
    }

    render() {
        console.log(MoviesDataJson);
        // console.log(this.props.match.params.id)
        return (
            <FilteringTableComponent movieList={MoviesDataJson} movieRow={this.movieRow} />
        )
    }
}

