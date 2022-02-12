import { useState } from "react";
import { Layout, Menu } from "antd";
import logoIMG from "../Logo_SmartBots.jpg";
import "./BaseLayout.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FormOutlined,
  MessageOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Chats from "../components/Chats";
import Profiles from "../components/Profiles";
import Permits from "../components/Permits";

const BaseLayout = () => {
  //collapse and expand the sider
  const { Header, Sider, Content } = Layout;
  const [expanded, setExpanded] = useState(false);

  const onExpanded = () => setExpanded(!expanded);

  return (
    <>
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Sider trigger={null} collapsible collapsed={expanded} theme="light">
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={logoIMG} alt="Logo" style={{ maxHeight: "15vh" }} />
            </div>
            <br></br>
            <Menu
              className="Menu"
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item className="item" key="1" icon={<UserOutlined />}>
                Profile <Link to="/profile" />
              </Menu.Item>
              <Menu.Item className="item" key="2" icon={<FormOutlined />}>
                Permits <Link to="/permit" />
              </Menu.Item>
              <Menu.Item className="item" key="3" icon={<MessageOutlined />}>
                Chat <Link to="/chat" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {expanded ? (
                <MenuUnfoldOutlined className="trigger" onClick={onExpanded} />
              ) : (
                <MenuFoldOutlined className="trigger" onClick={onExpanded} />
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
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/sign-up" element={<SignUp />} />
                <Route exact path="/profile" element={<Profiles />} />
                <Route exact path="/permit" element={<Permits />} />
                <Route exact path="/chat" element={<Chats />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>{" "}
      </Router>
    </>
  );
};

export default BaseLayout;
