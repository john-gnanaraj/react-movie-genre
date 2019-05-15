import React from 'react';

import './left-nav.css';

class TabbedMenuComp extends React.Component {
    render() {
        return(
            <div className="lftnavMainContainer">
                <ul>
                    <li className="active"><span>All</span></li>
                    <li><span>Action</span></li>
                    <li><span>Crime</span></li>
                    <li><span>Drama</span></li>
                    <li><span>Fantasy</span></li>
                </ul>
            </div>
        )
    }
}

export default TabbedMenuComp;