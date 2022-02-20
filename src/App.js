import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router";
import BaseLayout from "./Layout/BaseLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reset from "./pages/Reset";
import Chats from "./pages/Chats";
import Profiles from "./pages/Profiles";
import Permits from "./pages/Permits";
// Authentication
import { auth, db } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route exact path="/dashboard" element={<BaseLayout />} />
            <Route
              exact
              path="/profile"
              element={<BaseLayout page={<Profiles user />} />}
            />
            <Route
              exact
              path="/permit"
              element={<BaseLayout page={<Permits user />} />}
            />
            <Route
              exact
              path="/chat"
              element={<BaseLayout page={<Chats user />} />}
            />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
