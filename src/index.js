import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/Store.js';
import registerServiceWorker from './registerServiceWorker';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
ReactDOM.render(
    <Root />, 
    document.getElementById('root')
);
registerServiceWorker();
