import  React from 'react';
import {Layout, Menu} from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons'


function Navigator({expand, onExpanded}) {
//collapse and expand the sider
    const { Header, Sider, Content } = Layout;
    
  return(
      <>
      <Layout>
      <Sider trigger={null} collapsible collapsed={expand}>
        <div className="logo" ><h1 style={{color: 'white'}}>Logo</h1></div>
        <Menu className="Menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item className="item" key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item className="item" key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item className="item" key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(expand ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: onExpanded,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
      </>
  );
}

export default Navigator;
