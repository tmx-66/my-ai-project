import { useState } from 'react'
import { App, Button, Card, Form, Input, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

type RegisterForm = {
  username: string
  email: string
  password: string
  confirm: string
}

export default function RegisterPage() {
  const { message } = App.useApp()
  const navigate = useNavigate()
  const [form] = Form.useForm<RegisterForm>()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: RegisterForm) => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      console.log('注册成功（模拟）', values)
      message.success('注册成功，请登录')
      navigate('/login', { replace: true })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="注册" style={{ width: 400 }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input autoComplete="username" />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: '请输入邮箱' },
            { type: 'email', message: '邮箱格式不正确' },
          ]}
        >
          <Input autoComplete="email" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { min: 6, message: '至少 6 位' },
          ]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="confirm"
          dependencies={['password']}
          rules={[
            { required: true, message: '请再次输入密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('两次密码不一致'))
              },
            }),
          ]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            注册
          </Button>
        </Form.Item>
      </Form>
      <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
        已有账号？ <Link to="/login">去登录</Link>
      </Typography.Paragraph>
    </Card>
  )
}