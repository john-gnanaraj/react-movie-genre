import React from 'react';

import LeftMenuComponent from '../components/left-nav';

export default class LeftNavContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            name : ['All', 'Action', 'Adventure', 'Crime', 'Drama', 'Fantasy']
        }
        console.log(
            'constructor'
        )
    }

    // navFunc = (event) => {
    //     if(event.currentTarget.id !== this.state.name) {
    //         this.setState({
    //             name: event.target.id
    //         })
    //     }
    // }

    render() {
        console.log('render')
        return(
            <LeftMenuComponent name={this.state.name} />
            // navFunc={this.navFunc}
        )
    }
}
