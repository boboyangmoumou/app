import React, { Component } from 'react';
import { Menu } from 'antd';
export default class HeaderMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: this.props.Alltags[0]
    }
  }
  handleClick = (e) => {
    if (e.key === '首页') {
      this.props.fetchArticle('')
    } else {
      this.props.fetchArticle(e.key);
    }
    let toPath = e.key === '首页' ? '/' : '/' + e.key;
    this.aetState({
      current: e.key,
    });
    this.props.hsitory.push(toPath);
  }
  render () {
    return (
      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={[this.state.current]}
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '63px' }}
        onClike={this.handleClick}
      >
        {/* <Menu.Item key="/">nav 1</Menu.Item>
                    <Menu.Item key="/admin">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>  */}
        {
          this.props.Alltags.map((item, idnex) => (
            <Menu.Item key={item}>
              {item}
            </Menu.Item>
          ))
        }
      </Menu>
    )
  }
  componentDidMount () {
    this.setState({
      current: this.props.history.location.pathname.replace('\/', '') || '首页'
    })
  }
}