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

  console.log(authUser.discipline_id)

  return (
    <div>
          <NavLink
            // className="links"
            to="/feed">
            Studio
          </NavLink>

          UserPage

          <div>
              <h1>{authUser.username}</h1>
              <h2>{authUser.full_name}</h2>
              <p>{authUser.bio}</p>
              <p>{authUser.email}</p> 
          </div>


          {/* <NavLink
            // className="links linksLOGOUT"
            to="/"
            onClick={(e) => logOut(e)}
            >
            LOGOUT
          </NavLink> */}

        <Post authUser={authUser}/>
    </div>
  )
}

export default UserPage