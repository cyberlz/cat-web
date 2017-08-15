import {BLOG_INIT} from "src/constants/actions";
import dataSource from "src/datas/blog";

let blog =  {
  init:()=>{
    return {
			type:BLOG_INIT,
			payload:dataSource
		};
	}
};
export default blog;
