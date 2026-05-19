import { createBrowserRouter, redirect } from 'react-router-dom'
import { isLogin } from './auth/token'
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function requireAuth() {
  if (!isLogin()) {
    return redirect('/login')
  }
}

function redirectIFAuthed(){
  if (isLogin()) {
    return redirect('/')
  }
}

export const router = createBrowserRouter([
    //根路径：根据登录状态分流
    {
        path: '/',
        loader:() => redirect((isLogin() ? 'home' : '/login')),
    }

    //登录注册,共用AuthLayout
    ,{
        element: <AuthLayout />,
        children:[
            {
                path: '/login',
                loader: redirectIFAuthed,
                element: <LoginPage />
            },
            {
                path: '/register',
                loader: redirectIFAuthed,
                element: <RegisterPage />
            }
        ]
    }

    //主页，需要登录
    ,{
        element: <MainLayout />,
        loader: requireAuth,
        children:[
            {
                path: '/home',
                element: <HomePage />
            }
        ]
    }
])