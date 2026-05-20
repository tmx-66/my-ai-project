import { App, Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { removeToken,getUser } from '../auth/token'

export default function HomePage() {
  const { message } = App.useApp()
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    message.info('已退出登录')
    navigate('/login', { replace: true })
  }

  return (
    <div>
      <Typography.Title level={3}>Home</Typography.Title>
      <Typography.Paragraph>登录成功,欢迎免费plus用户{getUser()}</Typography.Paragraph>
      <Button danger onClick={handleLogout}>
        退出登录
      </Button>
    </div>
  )
}