import React, {Component} from 'react';

import './filtering-table.css';

class FilteringTableComp extends Component {

    render() {
        console.log(this.props.movieList);
        // console.log(this.props.movies[id]);

        return (
            <div className="filteringTableContainer">
                
                <table cellPadding="1" cellSpacing="1">
                    <tbody>
                        <tr>
                            <th className="filter-flno">Sl.No</th>
                            <th className="filter-title">Title</th>
                            <th className="filter-genre">Genre</th>
                            <th className="filter-rating">Rating</th>
                        </tr>

                        {
                            this.props.movieList.map((movieRow, index) => 
                        <tr className={index} key={index}>
                            <td>{movieRow.id}</td>
                            <td>{movieRow.movie}</td>
                            <td>{movieRow.genre}</td>
                            <td>{movieRow.rating}</td>
                        </tr>
                            
                        )
                    }
                        
                    </tbody>
                </table>
                
            </div>
        )
    }
}
export default FilteringTableComp;


// {
//     Object.keys(this.props.movieList).map((result, index) =>
//     // movieRow
//     // onClick={() => this.props.movieRow(index)}
// <tr key={index}>
//     <td>{result}</td>
//     <td>{}</td>
//     <td>{}</td>
//     <td>{}</td>                                
// </tr>
//     )
// }