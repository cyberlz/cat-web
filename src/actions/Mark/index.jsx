
import dataSource from "src/datas/mark";
import {MARK_INIT} from "src/constants/actions";

let mark =  {
	// init:()=>{
	// 	return (dispatch)=>{
	// 		fetchJson({
	// 			type:"GET",
	// 			url:"/react-redux/json/mark.json",
	// 			success:(res)=>{
	// 				if(res.code == 0){
	// 					let {result}=res;
	// 					dispatch({
	// 						type:MARK_INIT,
	// 						data:result
	// 					});
	// 				}else{
  //           console.log(res.error);
	// 					// StaticToast.error(res.error);
	// 				};
	// 			}
	// 		});
	// 	};
  init:()=>{
    return {
      type:MARK_INIT,
      payload:dataSource
    };
	}
};

export default mark;
