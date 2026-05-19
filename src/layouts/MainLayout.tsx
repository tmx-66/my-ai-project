import { Outlet,useLocation,useNavigate } from "react-router-dom";
import {Layout, Menu} from 'antd';

const { Header, Content, Sider } = Layout;
export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  return(
    <Layout className="min-h-dvh">
      <Sider width={200} theme='light'>
        <div className="flex h-16 justify-center items-center font-semibold text-slate-800">
            My admin
        </div>
        <Menu 
        theme='light'
        mode='inline'
        selectedKeys={[location.pathname]}
        items={[{
          key: '/home',
          label: '首页',
        }]}
        onClick={({key}) => navigate(key)} />
      </Sider>
      <Layout className="bg-white">
        <Header className="flex justify-between items-center !bg-white p-4">这是头部</Header>
        <Content className="p-4 rounded-lg bg-white m-4"  >
            <Outlet /> {/* 路由出口 */}
        </Content>
      </Layout>
    </Layout>
  )
}