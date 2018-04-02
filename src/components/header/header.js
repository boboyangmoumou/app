import React, {Component} from 'react';
import {Layout, Menu, Modal, Button } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
const { Header} = Layout;
export default class HeaderMenu extends Component {
    render() {
        return (
            <div >
                <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '63px' }}
                        onClike={this.handleClick}
                    >
                    <Menu.Item key="/">nav 1</Menu.Item>
                    <Menu.Item key="/admin">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item> 
                </Menu>
            </div>
        )
    }
}