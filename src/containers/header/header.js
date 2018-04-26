import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {Logined} from './Logined' 
import {Layout, Menu, Modal, Button } from 'antd';
import './style.css';
const { Header} = Layout;
export default class HeaderMenu extends Component {
    constructor(props) {
        super (props)
        this.state = {
            // ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
        }
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
            visible: false,
            confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    handleLogin(userName) {
        setTimeout(() => {
            if(userName){
                this.handleCancel();
            }
        },1000)        
    }
    handleClick(item){
        
    }
    render() {
        const { visible, confirmLoading } = this.state;
        const {login,userData,UserInfo} = this.props;
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '63px' }}
                        onClike={this.handleClick}
                    >
                    </Menu>
                    <div className="loginposition">     
                    { UserInfo ||  userData.result  ? <Logined loginedInfo={UserInfo ||  userData.result.userName}/> : <div type="primary" onClick={this.showModal}>登录</div>}                                                                       
                        <Modal 
                            title="登录"
                            visible={visible}
                            onOk={this.handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={this.handleCancel}
                            footer={null}>
                            <LoginForm login={login} onLogin={this.handleLogin.bind(this)}/>
                        </Modal>
                    </div>
                </Header>
            </Layout>
        )
    }
}