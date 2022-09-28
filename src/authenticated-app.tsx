import styled from "@emotion/styled";
import { Row } from 'components/lib';
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
        <Header>
            <HeaderLeft gap={true}>
                <h3>logo</h3>
                <h3>项目</h3>
                <h3>用户</h3>
            </HeaderLeft>
            <HeaderRight>
                <button onClick={logout}>登出</button>
            </HeaderRight>
        </Header>
        <Main>
            <ProjectListScreen />
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
  );
};

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
  justify-content: space-between;
`;

const HeaderLeft = styled(Row)``;
// const HeaderItem = styled.div``
const HeaderRight = styled.div``

const Main = styled.main`
  height: calc(100vh - 6rem);
`;
