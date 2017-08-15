import {HOME_INIT} from "src/constants/actions";
import dataSource from "src/datas/home";

let home =  {
  init:()=>{
    return {
      type:HOME_INIT,
      payload:dataSource
    };
	}
};
export default home;
