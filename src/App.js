import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import Home from "./components/blog/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

export const AuthContext = React.createContext();

function App() {
  const [currentUser, setUser] = useState(null);

  async function changeContext(user) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  async function deleteContext() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      <Router>
        <div className="App">
          <Navbar deleteContext={deleteContext} />
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" />} />
            <Route
              exact
              path="/login"
              element={<SignIn changeContext={changeContext} />}
            />
            <Route
              exact
              path="/register"
              element={<SignUp changeContext={changeContext} />}
            />
            <Route
              exact
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
