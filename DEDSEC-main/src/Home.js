/*import React,{useState} from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import './Home.css';
import 'antd/dist/antd.css';

type MenuItem = Required<MenuProps>['items'][number];
const { Header, Content, Footer, Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="navbar">
      <Layout style={{ minHeight: '100vh' }}>
       <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
       </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      </Layout>
    </div>
  )
}

export default Home*/

/*import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;*/



import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Contents from './Contents';
import { Button } from 'antd';
import Login from './Login';
// import { Button as btn } from "@mui/material";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Study Rooms', '1', <PieChartOutlined />),
  getItem('Discussion Rooms', '2', <DesktopOutlined />),
  getItem('Mentors', 'sub1', <UserOutlined />, [
    getItem('Sujeet', '3'),
    getItem('Manas', '4'),
    getItem('Akash', '5'),
  ]),
  getItem('Log Out', '9', <PoweroffOutlined />),
  getItem('Contact Us', 'sub2', <TeamOutlined />, [getItem('Facebook', '6'), getItem('LinkedIn', '8')]),
];
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [open,setOpen] = useState(false);
    const openDialog = () =>{
        setOpen(true);
    }
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{padding: 0,display:'flex',flexDirection:'row'}}>
          <div style={{marginLeft:'900px',color:'white'}}>
            <Button style={{marginRight:'30px'}} onClick={()=> openDialog()}>Login</Button>
            <a href="http://localhost:3002/" target="_blank">

            <Button style={{color:"black",marginRight:'30px'}}>Code Editor</Button>
            </a>
            <a href="http://localhost:3001/" target="_blank">

            <Button style={{color:"black"}}>Mentor Intraction</Button>
            </a>
          </div>
          <Login open={open} setOpen={setOpen}/>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>{/*Home page direction*/}</Breadcrumb.Item>
            <Breadcrumb.Item>{/*Home page direction*/}</Breadcrumb.Item>
          </Breadcrumb>
            <div className="lnk2" style={{position:"absolute",left:70,top:300,opacity:0}}>
              <a href=" https://www.linkedin.com/in/sujeet-kumar-rath-43a273225/" target="_blank">Linkedin</a>
            </div>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/*Writing on Home Page*/
               

            }
            <Contents />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          CREATED WITH ❤️ BY DEDSEC
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;
