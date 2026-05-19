const TOKEN_KEY = 'auth_token'
const TOKEN_USER = 'username'

/**
 * 设置token到本地存储
 * @param token - 需要存储的token字符串
 * @param username - 需要存储的用户名
 */
export const setToken = (token: string, username:string) => {
  localStorage.setItem(TOKEN_KEY, token) 
  localStorage.setItem(TOKEN_USER, username)// 将token存储到本地存储中，键为TOKEN_KEY
}


export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) // 从本地存储中获取token
}

export const getUser = () => {
  return localStorage.getItem(TOKEN_USER) // 从本地存储中获取token
}
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_USER) // 从本地存储中移除token
}

export function isLogin() {
  return !!getToken() // 判断本地存储中是否存在token，如果存在则返回true，否则返回false
}