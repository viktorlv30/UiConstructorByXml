/**
 * Created by v.litvak on 10.01.2017.
 */
import React from 'react';

//import Factory from '../../factory/FactoryComponent';

// let factory = new Factory();
// const Container = factory.createComponent('container');
// const Button = factory.createComponent('button');
// console.log(getFactoryInstance);
// console.log(getFactoryInstance());

class Window extends React.Component{
    constructor(options) {
        super(options);
        this.state = {};
        // console.log(`Window options is: `, options)
    }

    render () {
        // let Container = getFactoryInstance().getComponent('container', {container: 'first container'});
        // let Button = getFactoryInstance().getComponent('button', {button: 'some first button'});

        return(
            <div className="window" key={this.props.key}>
                THIS IS WINDOW COMPONENT
                {/*<Container />*/}
                {/*<Button />*/}
            </div>
        );
    }
}

export default Window;
