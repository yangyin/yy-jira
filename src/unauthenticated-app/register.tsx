import { useAuth } from "context/auth-context"
import React, { FormEvent } from "react"
import { Form, Input, Button } from "antd"
import { LongButton } from "unauthenticated-app"
import { useAsync } from "utils/use-async"

export const RegisterScreen = ({
  onError,
}: {
  onError: (e: Error) => void
}) => {
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
  const { user, register } = useAuth()
  const { run, isLoading } = useAsync(undefined, { throwOnError: true })
  const handleSubmit = async (values: {
    username: string
    password: string
  }) => {
    // event.preventDefault();
    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //     .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //     .value;
    // register(values).catch(onError);
    try {
      await run(register(values))
    } catch (error) {
      onError(error as Error)
    }
  }
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="text" id="password" />
      </Form.Item>
      <LongButton loading={isLoading} htmlType="submit" type="primary">
        注册
      </LongButton>
    </Form>
  )
}
