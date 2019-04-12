import React, { Component } from 'react';
import './index.css';
export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  render() {
    return <header className="header">
      <div className="container">
        <h1>火星积雪后台管理系统</h1>
      </div>
    </header>
  }
}
