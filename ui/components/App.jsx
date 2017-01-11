/**
 * Created by v.litvak on 10.01.2017.
 */
import React from 'react';
import Component from './Component';
import getFactoryInstance from '../../factory/registerComponents';

// let factory = new Factory();
// const Component = getFactoryInstance.createComponent('window');


// console.log('Factory component window is ', getFactoryInstance().getComponent('window', {myOption: true}));


// let Component = getFactoryInstance().getComponent('window', {Sunshine: 'Goga Little'});

// console.log('Component in WINDOW is ', Component);

// const Component = React.createElement(componentWindow);

export default class App extends React.Component{
    constructor(options){
        super(options);
        this.state = {};
        // console.log(`Options app is: `, options);
    }

    render() {
        return(
            <div>
                Hello, this is UI builder from XML
                <Component/>
                {/*<Window/>*/}
            </div>
        );
    }
};