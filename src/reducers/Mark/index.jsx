/**
 * 书签列表
 */
import { MARK_INIT } from "src/constants/actions";

let initStates = {
	markList:[]
};
function mark(state = initStates,action){
	switch(action.type){

		case MARK_INIT:
			return Object.assign({},state,{
				markList:action.payload
			});

		default:
			return state;
	};
};

export default mark;
