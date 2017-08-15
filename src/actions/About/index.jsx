import {ABOUT_INIT} from "src/constants/actions";
import dataSource from "src/datas/about";

let about = {
  init:()=>{
		return {
			type:ABOUT_INIT,
			payload:dataSource
		};
	}
};
export default about;
