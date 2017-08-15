/**
 * 首页
 */
import { HOME_INIT } from "src/constants/actions";

let initStates = {
	datas:[]
};
function home(state = initStates,action){
	switch(action.type){

		case HOME_INIT:
			return Object.assign({},state,{
				datas:action.payload
			});

		default:
			return state;
	};
};

export default home;
