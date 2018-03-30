import React, {Component} from 'react';
import {Input, Form, Icon, Button} from 'antd';
import style from './style.css';
const FormItem = Form.Item;

class LoginFormCom extends Component{
    constructor(props) {
        super(props)
    }
    handleLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                this.props.login(values.userName, values.password)
                this.props.onLogin(values.userName)
                console.log(values.userName,values.password);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleLogin} className={style.formStyle}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: '请输入你的用户名!'}],
                    })(
                        <Input 
                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码'}],                        
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Password"
                        />
                    )}
                </FormItem>
                <FormItem>
                    <Button className={style.loginButton} type="primary" htmlType="submit">
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}
const LoginForm = Form.create()(LoginFormCom);
export default LoginForm;