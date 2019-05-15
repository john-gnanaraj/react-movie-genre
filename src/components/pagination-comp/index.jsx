import React from 'react';

import './pagination.css';

class PaginationComp extends React.Component {
    render() {
        return (
            <div className="paginationContainer">
                <ul className="paginationWrap">
                    <li className="active"><span>1</span></li>
                    <li><span>2</span></li>
                    <li><span>3</span></li>
                    <li><span>4</span></li>
                    <li><span>5</span></li>
                </ul>
            </div>
        )
    }
}

export default PaginationComp;