import React, {Component} from 'react';

import './left-nav.css';

// import { Link } from 'react-router-dom';

// export default function TabbedMenuComp() {
class LeftMenuComponent extends Component {
    
    // console.log(props.navFunc);

    render() {
        return(
            <div className="lftnavMainContainer">
                <ul>{this.props.name.map(values => <li key={values}> {values}</li>)}</ul>
            </div>
        )
    }
}

// i=="all" ? 'active' : 'btn-class'

export default LeftMenuComponent;


