import { useAuth } from 'context/auth-context';
import React, { FormEvent } from "react";

export const Loginscreen = () => {
    
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
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement)
            .value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement)
            .value;
        login({ username, password });
    };
    return (
        <form onSubmit={handleSubmit}>
            {
                user ? <div>登入成功，用户名： {user?.name}</div> : null
            }

            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="text" id="password" />
            </div>
            <button type={"submit"}>登录/注册</button>
        </form>
    );
};