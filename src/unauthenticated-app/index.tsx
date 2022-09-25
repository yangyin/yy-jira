import { useState } from 'react'
import { Card, Button } from 'antd'
import { LoginScreen } from './login'
import { RegisterScreen } from './register'

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister ] = useState(false)

    return <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card>
        {
            isRegister ? <RegisterScreen /> : <LoginScreen />
        }
        <Button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</Button>
        </Card>
    </div>
}