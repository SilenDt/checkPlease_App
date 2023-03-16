import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import MainContainer from "./components/container/MainContainer";



function App() {

  return (
    <AuthProvider>
        <MainContainer/>
    </AuthProvider>
);
}

export default App;


