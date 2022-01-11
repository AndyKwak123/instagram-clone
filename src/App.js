import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup.js";
import Profile from "./components/Profile.js";
import Login from "./components/Login.js";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {currentUser ? (
            <Route exact path="/home" element={<Profile />} />
          ) : (
            <Route path="/home" element={<Login />} />
          )}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
