import {NavLink} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Post from './Post'

function UserPage({authUser, logOut}) {

  // const [showUser, setShowUser] = useState([])

  // useEffect(()=>{
  //   fetch("/authorized_user")
  //   .then(r => r.json())
  //   .then(setShowUser)
  // }, [])

  // function logOut() {

  //   fetch("/logout", {
  //   method: 'DELETE'})
  //   .then(r=>r.json())
  //   .then(console.log)
    // document.location.reload(true)

  // }

  console.log(authUser)

  return (
    <div>UserPage

          <div>
              <h2>{authUser.full_name}</h2>
              <p>{authUser.bio}</p>
              <p>{authUser.email}</p> 
          </div>

          <NavLink
            // className="links"
            to="/feed">
            Studio
          </NavLink>

          {/* <NavLink
            // className="links linksLOGOUT"
            to="/"
            onClick={(e) => logOut(e)}
            >
            LOGOUT
          </NavLink> */}

        <Post />
    </div>
  )
}

export default UserPage