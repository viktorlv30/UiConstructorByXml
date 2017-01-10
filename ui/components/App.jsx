/**
 * Created by v.litvak on 10.01.2017.
 */
import React from 'react';
import Component from './Window';
import Factory from '../../factory/FactoryComponent';

let factory = new Factory();
// const Component = factory.createComponent('window');

export default React.createClass({
    render: function () {
        return(
            <div>
                Hello, this is UI builder from XML
                <Component />
            </div>
        );
    }
});