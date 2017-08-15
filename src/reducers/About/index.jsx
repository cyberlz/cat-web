/**
 * 关于
 */
import { ABOUT_INIT } from "src/constants/actions";

let initStates = {
	datas:[]
};
function about(state = initStates,action){
	console.log(action);
	switch(action.type){

		case ABOUT_INIT:
			return Object.assign({},state,{
				datas:action.payload
			});

		default:
			return state;
	};
};

export default about;
