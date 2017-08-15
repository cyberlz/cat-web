import React from 'react';
import './index.scss';

class ItemMark extends React.Component{

  render(){
    const { item } = this.props;
    return (
      <div className="item-mark">
        <a target="_blank" href={ item.url }>
          <div>{ item.id }</div>
          <div>{ item.title }</div> 
          <div>{ item.desc }</div>
        </a>
      </div>
    );
  }
}

export default ItemMark;
