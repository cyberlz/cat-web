import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classnames from 'classnames';
import dia from "src/utils/dia";
import Storage from 'src/utils/storage';
import actions from "src/actions/Home";
import './index.scss';

function mapStateToProps(state){
	const { datas } = state.homeStore;
	return {
		_datas:datas
	};
};

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};

@connect(mapStateToProps,mapDispatchToProps)
class Home extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		dia(this);
		let {ACTIONS}=this.props;
	}

	componentDidMount(){
		let { ACTIONS }=this.props;
		ACTIONS.init();
	}

	render() {
		let { _datas } = this.props;
		return (
			<section className="i-home">
				<div className="i-content">
					<div className="user-info">
	          <div className="user-icon">图片</div>
	          <div className="user-name"><p>React+Redux</p></div>
	          <div className="user-identity">
	          	<div className="inner">首页信息</div>
	          </div>
	          内容展示{ JSON.stringify(_datas) }
	      	</div>
				</div>
			</section>
		);
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
