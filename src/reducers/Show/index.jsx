/**
 * 项目展示
 */
import { SHOW_INIT } from "src/constants/actions";

let initStates = {
	showList:[]
};
function show(state = initStates,action){
	switch(action.type){

		case SHOW_INIT:
			return Object.assign({},state,{
				showList:action.payload
			});

		default:
			return state;
	};
};

export default show;
