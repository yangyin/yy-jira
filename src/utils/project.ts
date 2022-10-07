import { User } from "screens/project-list/search-panel"
import { useEffect } from "react"
import { Project } from "screens/project-list/list"
import { cleanObject, useDebounce, useMount } from "utils"
import { useHttp } from "./http"
import { useAsync } from "./use-async"

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp()
  const { run, ...result } = useAsync<Project[]>()

  useEffect(() => {
    run(client("projects", { data: cleanObject(param || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  return result
}

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp()
  const { run, ...result } = useAsync<User[]>()

  // useMount(() => {
  //   run(client("users", { data: cleanObject(param || {})}))
  // });
  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  return result
}
