import React, {useState} from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile() {
  const [error, setError] = useState()
  const {currentUser, setCurrentUser} = useAuth()
//   const navigate = useNavigate()

console.log(currentUser)


//   async function handleLogout(){
//     setError("")
//     try{
//       await logout()
//       navigate("/login")
//     } catch {
//       setError("error failed to logout")
//     }

//   }
  return (
  <>    
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <strong>Email </strong> {currentUser.email}
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update profile
        </Link>
      </Card.Body>
    </Card>
        {/* <div className = "w-100 text-center mt-2"> */}
      {/* <Button variant="link" onClick={handleLogout}>Log out</Button> */}
      {/* </div> */}
  </>
  )
}