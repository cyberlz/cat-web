/**
 * 顶栏菜单
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

class Nav extends React.Component{
  render(){
    return (
      <div className="navbar">
        <NavLink exact to="/">首页</NavLink>
        <NavLink to="/blog">博客</NavLink>
        <NavLink to="/show">展示</NavLink>
        <NavLink to="/mark">书签</NavLink>
        <NavLink to="/about">关于</NavLink>
    </div>
    );
  }
}

export default Nav;
