/**
 * Created by v.litvak on 10.01.2017.
 */
import Window from '../ui/components/Window';
import Container from '../ui/components/Container';
import Button from '../ui/components/Button';

const defaultComponent = {};

export default function factory(){
    this.createComponent = function (type) {
        let component;

        switch (type) {
            case 'window':
                component = Window;
                break;
            case 'container':
                component = Container;
                break;
            case 'button':
                component = Button;
                break;
            default: component = defaultComponent;
        }

        return component;
    }
}