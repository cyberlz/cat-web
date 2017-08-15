import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "src/actions/Show";

function mapStateToProps(state){
	const { showList } = state.showStore;
	return {
		_datas:showList
	};
};

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};

@connect(mapStateToProps,mapDispatchToProps)
class Show extends React.Component {
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
         展示{JSON.stringify(_datas)}
      </div>
    )
  }
}

export default Show;
