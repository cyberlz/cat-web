/**
 * 合并导出Reducers
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from './Home';
import blogReducer from './Blog';
import showReducer from './Show';
import markReducer from './Mark';
import aboutReducer from './About';

const reducers = {
	homeStore: homeReducer,
	blogStore: blogReducer,
	showStore: showReducer,
	markStore: markReducer,
	aboutStore: aboutReducer,
};

export default combineReducers({...reducers,router: routerReducer});
