import { useAuth } from 'context/auth-context';
import React, { FormEvent } from "react";
import { Form, Input, Button } from 'antd'
import { LongButton } from 'unauthenticated-app';

export const LoginScreen = () => {
    
    // const login = (param: { username: string; password: string }) => {
    //     fetch(`${apiURL}/login`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(param),
    //     }).then(async (response) => {
    //         if (response.ok) {
    //         }
    //     });
    // };
    const { user, login } = useAuth();
    // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //         .value;
    //     const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //         .value;
    //     login({ username, password });
    // };
    const handleSubmit = (values: {username: string, password: string}) => {
        
        login(values);
    };
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
                {/* <label htmlFor="username">用户名</label> */}
                <Input placeholder='用户名' type="text" id="username" />
            </Form.Item>
            <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
                {/* <label htmlFor="password">密码</label> */}
                <Input placeholder='密码'  type="text" id="password" />
            </Form.Item>
            <LongButton type='primary' htmlType='submit'>登录</LongButton>
        </Form>
    );
};