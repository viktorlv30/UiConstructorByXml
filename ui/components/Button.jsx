/**
 * Created by v.litvak on 10.01.2017.
 */
import React from 'react';

class Button extends React.Component{

    constructor(options) {
        super(options);
        this.state = {};
        // console.log(`Button options is: `, options);
    }

    render() {
        return(
            <button className="settingsButton" key={this.props.key}>This is a BUTTON</button>
        );
    }
}

export default Button;