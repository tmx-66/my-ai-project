import { useState } from 'react'
import { App, Button, Card, Form, Input, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { setToken } from '../auth/token'

type LoginForm = {
  username: string
  password: string
}

export default function LoginPage() {
  const { message } = App.useApp()
  const navigate = useNavigate()
  const [form] = Form.useForm<LoginForm>()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: LoginForm) => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setToken(`mock-${values.username}`,values.username)
      message.success('登录成功')
      navigate('/home', { replace: true })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="登录" style={{ width: 400 }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="任意用户名" autoComplete="username" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="任意密码" autoComplete="current-password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            登录
          </Button>
        </Form.Item>
      </Form>
      <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
        还没有账号？ <Link to="/register">去注册</Link>
      </Typography.Paragraph>
    </Card>
  )
}