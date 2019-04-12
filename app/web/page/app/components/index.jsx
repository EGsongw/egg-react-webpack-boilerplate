import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './router/home';
import About from './router/about';
import User from './router/user';

import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

  
class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      mode: 'inline',
      theme: 'light',
    };
  };


  changeMode (value) {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  }

  changeTheme (value) {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    return <div>
      {/* <Switch onChange={this.changeMode} /> Change Mode
        <span className="ant-divider" style={{ margin: '0 1em' }} />
        <Switch onChange={this.changeTheme} /> Change Theme
        <br />
        <br /> */}
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <SubMenu key="sub0" title={<span><Icon type="appstore" /><span>用户</span></span>}>
            <Menu.Item key="1" > <Link to="/user">用户管理User</Link></Menu.Item>
            <Menu.Item key="2">会员管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>知否</span></span>}>
            <Menu.Item key="3">文章管理</Menu.Item>
            <Menu.Item key="4">标签管理</Menu.Item>
            <Menu.Item key="5">笔记管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="setting" /><span>工具</span></span>}>
            <Menu.Item key="6">基础工具管理</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <SubMenu key="sub1-2" title="笔记管理">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
    </div>;
  }
}

export default App;
