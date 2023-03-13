import React from "react";
import SignUp from  "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext";

function App() {

  return (
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"60vh"}}>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </Container>
    </AuthProvider>
);
}

export default App;
