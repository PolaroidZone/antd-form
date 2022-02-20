import { useState, useEffect } from "react";
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

// Authentication
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { auth, db, logout } from "../firebase/firebase";
import { query, collection, getDocs, where, doc } from "firebase/firestore";

const BaseLayout = ({ page }) => {
  //collapse and expand the sider
  const { Header, Sider, Content } = Layout;
  const [expanded, setExpanded] = useState(false);

  const onExpanded = () => setExpanded(!expanded);

  // Authentication
  const [user, loading, error] = useAuthState(auth);

  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      console.log(doc);
      // const data = doc.docs[0].data();
      // console.log(data);
      // setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <>
      <Layout style={{ height: "100vh", overflow: "hidden" }}>
        <Sider trigger={null} collapsible collapsed={expanded} theme="light">
          <br></br>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={logoIMG}
              alt="Logo"
              style={{ maxHeight: "15vh", maxWidth: "80%" }}
            />
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
            <button className="dashboard__btn" onClick={logout}>
              Logout
            </button>
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
              display: "flex",
              overflow: "scroll",
              backgroundColor: "#FEFEFE",
            }}
          >
            {page}
            {/* Logged in as
            <div>{name}</div>
            <div>{user?.email}</div> */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default BaseLayout;
