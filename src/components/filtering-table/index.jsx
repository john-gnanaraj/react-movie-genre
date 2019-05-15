import React from 'react';

import './filtering-table.css';

export default function FilteringTableComp(props) {

    // console.log(movieList);

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
                            
                        <tr>
                            <td>{props.movieList.genre}</td>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>                                
                        </tr>
                        
                    </tbody>
                </table>
               
        </div>
    )
}

