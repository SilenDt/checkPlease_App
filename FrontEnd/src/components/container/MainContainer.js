import SignUp from  "../auth/SignUp";
import SignIn from "../auth/SignIn";
import NavBar from "../layout/NavBar";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../pages/Profile";
import ProtectedRoute from "../security/ProtectedRoute"
import SignUpForm from "../auth/SignUpForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Container, Row, Column} from "react-bootstrap"
import ForgotPassword from "../auth/ForgotPassword";



const MainContainer = () => {
  return(
<Router>
          <NavBar/>
            <Container 
              className="d-flex align-items-center justify-content-center" 
              style={{minHeight:"60vh"}}>
                <Routes>
                      <Route exact path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
                      <Route path="/signin" element={<SignIn/>}></Route>
                      <Route path="/signup" element={<SignUp/>}></Route>
                      <Route path="/signupform" element={<ProtectedRoute><SignUpForm/></ProtectedRoute>}></Route>
                      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                      <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
                    </Routes> 
            </Container>
        </Router>
        )
}

export default MainContainer