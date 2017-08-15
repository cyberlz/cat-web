/**
 * 创建Store并绑定中间件
 */
import { createStore, applyMiddleware } from "redux";
import thunkMid from "redux-thunk";
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import reducers from "src/reducers";

export const history = createBrowserHistory();
const routerMid = routerMiddleware(history);
const middlewares = [thunkMid, routerMid];

function configStore (){
    let createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    //dev环境开启redux调试
    let store  = createStoreWithMiddleware(reducers,(__DEBUG__ && window.devToolsExtension ? window.devToolsExtension() : undefined));
    return store;
};

export default configStore();
