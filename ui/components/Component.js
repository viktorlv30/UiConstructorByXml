/**
 * Created by v.litvak on 11.01.2017.
 */
/**
 * Created by v.litvak on 10.01.2017.
 */
import React from 'react';
import getFactoryInstance from '../../factory/registerComponents';


class Component extends React.Component{
    constructor(options) {
        super(options);
        this.state = {
            children: [
                getFactoryInstance().getInstance('window', {key: 1}),
                getFactoryInstance().getInstance('container', {key: 2}),
                getFactoryInstance().getInstance('button', {key: 3}),
                getFactoryInstance().getInstance('button', {key: 4}),
            ]
        };
        // console.log(`Window options is: `, options)
    }

    renderChildren() {
        return this.state.children.map(child => {
            return child.render();
        });
    }

    render () {
        return(
            <div>
                {this.renderChildren()}
            </div>
        );
    }
}

export default Component;
