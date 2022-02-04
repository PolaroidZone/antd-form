import React from "react";
import { Layout, Menu } from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FormOutlined,
  MessageOutlined,
  UploadOutlined,
} from "@ant-design/icons";

function Navigator({ expand, onExpanded }) {
  //collapse and expand the sider
  const { Header, Sider, Content } = Layout;

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={expand}>
          <div className="logo">
            <img src={1} />
          </div>
          <Menu
            className="Menu"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item className="item" key="1" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item className="item" key="2" icon={<FormOutlined />}>
              Permits
            </Menu.Item>
            <Menu.Item className="item" key="3" icon={<MessageOutlined />}>
              Chat
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              expand ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: onExpanded,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
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
