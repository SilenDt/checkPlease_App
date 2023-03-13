import React from "react";
import SignUp from "./components/auth/SignUp";
import {Container} from "react-bootstrap"

function App() {
  return (
    <div className="App">
        <h1>This is Check Please App Page</h1>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"60vh"}}>
        <SignUp/>
      </Container>
    </div>
  );
}

export default App;
