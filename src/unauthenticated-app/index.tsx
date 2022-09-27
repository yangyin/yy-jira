import { useState } from 'react'
import { Card, Button, Divider } from 'antd'
import { LoginScreen } from './login'
import { RegisterScreen } from './register'
import styled from '@emotion/styled'

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister ] = useState(false)

    return <Container>
        
        <ShadowCard>
        {
            isRegister ? <RegisterScreen /> : <LoginScreen />
        }
        <Divider />
        <a onClick={() => setIsRegister(!isRegister)}>{isRegister ? '已经有账号了？直接登录' : '没有账号？注册新账号'}</a>
        </ShadowCard>
    </Container>
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
`
const ShadowCard = styled(Card)`
width: 40rem;
min-height: 46rem;
padding: 3.2rem 4rem;
border-radius: .3rem;
box-shadow: rgba(0,0,0,0.1) 0 0 10px;
text-align: center;
`