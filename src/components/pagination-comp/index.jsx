import React, {Component} from 'react';

import './pagination.css';

class PaginationComp extends Component {
    state = {
        startIndex: 0,
        endIndex: 5
    };
    constructor(props){
        super(props);
        this.state ={
            startIndex: 0,
            endIndex: 5
        }
    }

    render() {
        // const indexVal = 0;
        console.log(this.props.paginationList);
        var startIndex = this.state.startIndex;
        var endIndex = this.state.endIndex;
        // console.log(index);

        // const totalPages = this.totalPages;
        // const currentPage = this.state.currentPage;

        return (
            <div className="paginationContainer">
                <ul className="paginationWrap">
                {
                    this.props.paginationList.map((paginationRow, index) =>
                        <li key={index}><span>{index+1}</span></li>
                        
                    )
                }
                </ul>
            </div>
        )

        
    }
}


// {
//     numbers.map((item) => <li className={meta.pagination.current_page === item ? "page-item active" : "page-item"}><button className="page-link" onClick={() => this.props.pageNumber(item,"num")}>{item}</button></li>) 
// }

export default PaginationComp;

