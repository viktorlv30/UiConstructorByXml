/**
 * Created by v.litvak on 10.01.2017.
 */
const defaultComponent = {};

function Factory(){
    this.createComponent = function (type) {
        let component;

        switch (type) {
            case 'window':
                component = new Window();
                break;
            case 'container':
                component = new Container();
                break;
            case 'button':
                component = new Button();
                break;
            default: component = defaultComponent;
        }

        return component;
    }
}