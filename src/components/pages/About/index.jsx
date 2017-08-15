import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "src/actions/About";

function mapStateToProps(state){
	const { datas } = state.aboutStore;
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
class About extends React.Component {
  constructor(props){
    super(props);
  }

	componentDidMount(){
		let { ACTIONS }=this.props;
		ACTIONS.init();
	}

  render() {
		let { _datas } = this.props;
    return (
      <div>
         关于{JSON.stringify(_datas)}
      </div>
    )
  }
}

export default About;
