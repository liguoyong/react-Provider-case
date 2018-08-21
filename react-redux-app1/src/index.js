import React from 'react';//引入react库
import ReactDOM from 'react-dom';//引入react-dom插件
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux' //连接react和redux
import store from './store' 

ReactDOM.render(
    (
        <Provider store={store}>
            <App/>
        </Provider>
    ), 
    document.getElementById('root')
);

registerServiceWorker();
