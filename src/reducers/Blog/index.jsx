/**
 * 博客
 */
import { BLOG_INIT } from "src/constants/actions";

let initStates = {
	blogList:[]
};
function blog(state = initStates,action){
	switch(action.type){

		case BLOG_INIT:
			return Object.assign({},state,{
				blogList:action.payload
			});

		default:
			return state;
	};
};

export default blog;
