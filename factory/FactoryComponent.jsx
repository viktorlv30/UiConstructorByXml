/**
 * Created by v.litvak on 10.01.2017.
 */
import React from 'react';

class AbstractComponentFactoryPrivate {
    constructor() {
        this.types = {};
    }
}

const privates = new WeakMap();

class AbstractComponentFactory {
    constructor() {
        privates.set(this, new AbstractComponentFactoryPrivate());
    }

    getComponent(type, options) {
        let _this = privates.get(this);
        let Component = _this.types[type];
        if (Component instanceof Function) {
            console.log(`Component "${type}" was called!`);
            // return Component.bind(undefined, options);
            return () => {
                return React.createElement(Component, options);
            };
        } else {
            throw new Error('AbstractFactory: No such component type registered');
        }
    }

    getInstance(type, options) {
        let _this = privates.get(this);
        let Component = _this.types[type];
        if (Component instanceof Function) {
            console.log(`Component "${type}" was called!`);
            return new Component(options);
        } else {
            throw new Error('AbstractFactory: No such component type registered');
        }
    }

    registerComponent(Component, type) {
        let _this = privates.get(this);
        if (!(Component instanceof Function)) {
            throw new Error('AbstractFactory: Component is not a function');
        }
        if (!(Component.prototype instanceof React.Component)) {
            throw new Error('AbstractFactory: Component is not subclass of React.Component');
        }
        if (_this.types.hasOwnProperty(type)) {
            throw new Error('AbstractFactory: Duplicate type registration');
        }
        _this.types[type] = Component;
        console.log(`Component "${type}" was registered!`);
        return this;
    }
}

export default AbstractComponentFactory;