/*
 * Actions
 */
import homeAction from "./Home/index";
import blogAction from "./Blog/index";
import showAction from "./Show/index";
import markAction from "./Mark/index";
import aboutAction from "./About/index";

let actions = Object.assign({},
	homeAction,
	blogAction,
	showAction,
	markAction,
  aboutAction);
  
export default actions;
