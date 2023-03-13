import React from "react";
import SignUp from  "./components/auth/SignUp";
import {Container} from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
      <AuthProvider>
        <h1>This is Check Please App Page</h1>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"60vh"}}>
        <SignUp/>
      </Container>
      </AuthProvider>
  );
}

export default App;
