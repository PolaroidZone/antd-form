import React from "react";
import { Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  FormOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Chats from "./Chats";
import Permits from "./Permits";
import Profiles from "./Profiles";
import Login from "./Login";

function Navigator({ expand, onExpanded }) {
  //collapse and expand the sider
  const { Header, Sider, Content } = Layout;

  return (
    <>
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Sider trigger={null} collapsible collapsed={expand}>
            <div className="logo"></div>
            <Menu
              className="Menu"
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["profile"]}
            >
              <Menu.Item className="item" key="profile" icon={<UserOutlined />}>
                Profile <Link to="/profile" />
              </Menu.Item>
              <Menu.Item className="item" key="permit" icon={<FormOutlined />}>
                Permits <Link to="/permit" />
              </Menu.Item>
              <Menu.Item className="item" key="chat" icon={<MessageOutlined />}>
                Chat <Link to="/chat" />
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
              
            >
              <Route exact path="/" component={Login} />
              <Route exact path="/profile" component={Profiles} />
              <Route exact path="/permit" component={Permits} />
              <Route exact path="/chat" component={Chats} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    </>
  );
}

export default Navigator;
