import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router";
import BaseLayout from "./Layout/BaseLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Reset from "./components/Reset";
import Chats from "./components/Chats";
import Profiles from "./components/Profiles";
import Permits from "./components/Permits";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/admin-login" element={<Login />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route exact path="/dashboard" element={<BaseLayout />} />
            <Route
              exact
              path="/profile"
              element={<BaseLayout page={<Profiles />} />}
            />
            <Route
              exact
              path="/permit"
              element={<BaseLayout page={<Permits />} />}
            />
            <Route
              exact
              path="/chat"
              element={<BaseLayout page={<Chats />} />}
            />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
