import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router";
import BaseLayout from "./Layout/BaseLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route exact path="/" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/profile" component={BaseLayout} />
            <Route exact path="/permit" component={BaseLayout} />
            <Route exact path="/chat" component={BaseLayout} />
          </Routes>
        </Router>
      </>
      <BaseLayout />
    </div>
  );
}

export default App;
