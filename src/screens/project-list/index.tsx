import { useEffect, useState } from "react";
// import qs from "qs";
import { cleanObject, useDebounce, useMount } from "../../utils";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useHttp } from "utils/http";

// const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp();

  const debouncedParam = useDebounce(param, 2000);

  useEffect(() => {
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
    client("projects", { data: cleanObject(debouncedParam) }).then(setList)
  }, [param]);

  useMount(() => {
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
    client("users").then(setUsers)
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
