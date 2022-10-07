import React, { ReactNode, useState } from "react"
import * as auth from "auth-provider"
import { User } from "screens/project-list/search-panel"
import { http } from "utils/http"
import { useMount } from "utils"
import { useAsync } from "utils/use-async"
import { FullPageError, FullPageLoading } from "components/lib"

const AuthContext = React.createContext<
  | {
      user: User | null
      login: (form: AuthForm) => Promise<void>
      register: (form: AuthForm) => Promise<void>
      logout: () => Promise<void>
    }
  | undefined
>(undefined)

AuthContext.displayName = "AuthContext"

interface AuthForm {
  username: string
  password: string
}

const bootstrapUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    const data = await http("me", { token })
    console.log("me::", data)
    user = data.user
  }
  return user
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [user, setUser] = useState<User | null>(null)
  const {
    data: user,
    run,
    isLoading,
    isIdle,
    isError,
    error,
    setData: setUser,
  } = useAsync<User | null>()

  // point free
  const login = (form: AuthForm) => auth.login(form).then(setUser)
  const register = (form: AuthForm) => auth.register(form).then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))

  useMount(() => {
    // bootstrapUser().then(setUser)
    run(bootstrapUser())
  })

  if (isIdle || isLoading) {
    return <FullPageLoading />
  }

  if (isError) {
    return <FullPageError error={error} />
  }

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  )
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用")
  }
  return context
}
