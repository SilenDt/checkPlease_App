import React from "react";
import SignUp from  "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/pages/Profile";
import ProtectedRoute from "./components/security/ProtectedRoute"
import SignUpForm from "./components/auth/SignUpForm";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Container, Row, Column} from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPassword from "./components/auth/ForgotPassword";


function App() {

  return (
    <AuthProvider>
        <Router>
          <NavBar/>
            <Container 
              className="d-flex align-items-center justify-content-center" 
              style={{minHeight:"60vh"}}>
                <Routes>
                      <Route exact path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>
                      }/>
                      <Route path="/signin" element={<SignIn/>}></Route>
                      <Route path="/signup" element={<SignUp/>}></Route>
                      <Route path="/signupform" element={<ProtectedRoute><SignUpForm/></ProtectedRoute>}></Route>
                      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                      <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
                    </Routes> 
            </Container>
        </Router>
    </AuthProvider>
);
}

export default App;


