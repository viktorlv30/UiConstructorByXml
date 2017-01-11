/**
 * Created by v.litvak on 10.01.2017.
 */
import React from 'react';

class Container extends React.Component{
    constructor(options) {
        super(options);
        this.state = {};
        // console.log(`Container options is: `, options);
    }

    render() {
        return(
            <div className="displayContainer" key={this.props.key}>THIS is CONTAINER DIV</div>
        );
    }
};


export default Container;