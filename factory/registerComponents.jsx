/**
 * Created by v.litvak on 11.01.2017.
 */
import React from 'react';

import AbstractComponentFactory from './FactoryComponent';

let factory = undefined;

function getFactoryInstance() {
    if (factory === undefined) {
        factory = new AbstractComponentFactory();
    }
    return factory;
}

getFactoryInstance().registerComponent(require('../ui/components/Window').default, 'window');
// getFactoryInstance().registerComponent(require('../ui/components/Component').default, 'component');
getFactoryInstance().registerComponent(require('../ui/components/Container').default, 'container');
getFactoryInstance().registerComponent(require('../ui/components/Button').default, 'button');

export default getFactoryInstance;
