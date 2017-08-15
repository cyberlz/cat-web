import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "src/actions/Blog";

function mapStateToProps(state){
	const { blogList } = state.blogStore;
	return {
		_datas:blogList
	};
};

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};

@connect(mapStateToProps,mapDispatchToProps)
class Blog extends React.Component {
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
         博客{JSON.stringify(_datas)}
      </div>
    )
  }
}

export default Blog;
