import { useState } from "react"
interface State<D> {
  stat: "idle" | "loading" | "success" | "error"
  data: D | null
  error: Error | null
}

const defaultState: State<null> = {
  stat: "idle",
  data: null,
  error: null,
}

const defaultConfig = {
  throwOnError: false,
}

export const useAsync = <D>(
  initialState?: State<D>,
  initialConfig?: typeof defaultConfig
) => {
  const [state, setState] = useState<State<D>>({
    ...defaultState,
    ...initialState,
  })

  const config = {
    ...defaultConfig,
    ...initialConfig,
  }

  const setData = (data: D) => {
    setState({
      stat: "success",
      data,
      error: null,
    })
  }

  const setError = (error: Error) => {
    setState({
      stat: "error",
      error,
      data: null,
    })
  }

  // run 用来触发异步请求
  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("请传入 promise 函数")
    }

    setState({ ...state, stat: "loading" })

    return promise
      .then((data) => {
        setData(data)
        return data
      })
      .catch((error) => {
        setError(error)
        if (config.throwOnError) return Promise.reject(error)
        return error
      })
  }

  return {
    ...state,
    run,
    setData,
    setError,
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isSuccess: state.stat === "success",
    isError: state.stat === "error",
  }
}
