/**
 * Created by v.litvak on 10.01.2017.
 */
import React from 'react';
// import Container from './Container';
// import Button from './Button';
import Factory from '../../factory/FactoryComponent';

let factory = new Factory();
const Container = factory.createComponent('container');
const Button = factory.createComponent('button');

export default React.createClass({
    render: function () {
        return(
            <div>
                THIS IS WINDOW COMPONENT
                <Container />
                <Button />
            </div>
        );
    }
});