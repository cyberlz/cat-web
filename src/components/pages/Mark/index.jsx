import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemMark from '../../items/ItemMark/index';
import actions from 'src/actions/Mark';
import './index.scss';

function mapStateToProps(state){
	const { markList } = state.markStore;
	return {
		_datas:markList
	};
};

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};

@connect(mapStateToProps,mapDispatchToProps)
class Mark extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let { ACTIONS }=this.props;
    ACTIONS.init();
  }

  render() {
    let { _datas } = this.props;
		const marks = _datas.map((item,index) => {
			return <div className="it" key={item.id}><ItemMark item={item}/></div>
		});
    return (
      <div className="page-mark">
			  {marks}
      </div>
    )
  }
}

export default Mark;
