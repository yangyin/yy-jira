import { useEffect, useState } from "react"
// import qs from "qs";
import { cleanObject, useDebounce, useMount } from "../../utils"
import { List, Project } from "./list"
import { SearchPanel } from "./search-panel"
import { useHttp } from "utils/http"
import styled from "@emotion/styled"
import { Typography } from "antd"
// import { useAsync } from 'utils/use-async';
import { useProjects, useUsers } from "utils/project"

// const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  })
  // const [list, setList] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<null | Error>(null)

  // const client = useHttp();
  const debouncedParam = useDebounce(param, 2000)
  const { isLoading, error, data: list } = useProjects(debouncedParam)
  const { data: users } = useUsers()
  // const { run, isLoading, error, data: list } = useAsync<Project[]>()

  // useEffect(() => {
  // fetch(
  //   `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
  // ).then(async (response) => {
  //   if (response.ok) {
  //     setList(await response.json());
  //   }
  // });
  // run(client('projects', {data: cleanObject(debouncedParam)}))
  // setIsLoading(true)
  // client("projects", { data: cleanObject(debouncedParam) })
  //     .then(setList)
  //     .catch(e => {
  //         setError(e)
  //         setList([])
  //     })
  //     .finally(() => {
  //     setIsLoading(false)
  // })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [param]);

  // useMount(() => {
  //   // fetch(`${apiUrl}/users`).then(async (response) => {
  //   //   if (response.ok) {
  //   //     setUsers(await response.json());
  //   //   }
  //   // });
  //   client("users").then(setUsers);
  // });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error && (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      )}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
