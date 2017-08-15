import {SHOW_INIT} from "src/constants/actions";
import dataSource from "src/datas/show";

let show =  {
  init:()=>{
    return {
      type:SHOW_INIT,
      payload:dataSource
    };
	}
};
export default show;
