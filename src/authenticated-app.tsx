import styled from "@emotion/styled"
import { Dropdown, Menu, Button } from "antd"
import { Row } from "components/lib"
import { useAuth } from "context/auth-context"
import { Route, Routes } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import { ProjectScreen } from "screens/project"
import { ProjectListScreen } from "screens/project-list"
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg"

export const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
        {/* <ProjectListScreen /> */}
        <Router>
          <Routes>
            <Route path="/projects" element={<ProjectListScreen />} />
            <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
          </Routes>
        </Router>
      </Main>
      {/* <Header>header</Header>
        <Nav />
        <Main />
        <Footer />
        <Aside /> */}
      {/* <PageHeader>
        <button onClick={logout}>登出</button>
      </PageHeader>
      <Main>
        <ProjectListScreen />
      </Main> */}
    </Container>
  )
}

const PageHeader = () => {
  const { logout, user } = useAuth()
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <HeaderItem>
          <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
        </HeaderItem>
        <HeaderItem>项目</HeaderItem>
        <HeaderItem>用户</HeaderItem>
      </HeaderLeft>
      <HeaderRight>
        {/* <button onClick={logout}>登出</button> */}
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={1}>
                <Button type={"link"} onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            Hi,{user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  )
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 6rem 1fr;
  /* grid-template-rows: 6rem calc(100vh - 6rem); */
  /* grid-template-rows: 6rem 1fr 6rem;
    grid-template-columns: 20rem 1fr 20rem;
    grid-template-areas: 
    "nav header header"
    "nav main main"
    "nav footer footer"
    ;
    grid-gap: 5px 0; */
`

// const Header = styled.header`grid-area: header; background-color: gray`
// const Main = styled.header`grid-area: main; background-color: gainsboro;`
// const Nav = styled.header`grid-area: nav; background-color: goldenrod;grid-column-gap: 5px`
// const Aside = styled.header`grid-area: aside; background-color: greenyellow`
// const Footer = styled.header`grid-area: footer; background-color: black`

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const HeaderLeft = styled(Row)``
const HeaderItem = styled.h3`
  margin-right: 3rem;
`
const HeaderRight = styled.div``

const Main = styled.main`
  height: calc(100vh - 6rem);
`
