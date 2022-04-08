import {NavLink} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Post from './Post'

function UserPage() {

  const [showUser, setShowUser] = useState([])

  useEffect(()=>{
    fetch("/authorized_user")
    .then(r => r.json())
    .then(setShowUser)
  }, [])



  return (
    <div>UserPage

          <NavLink
            // className="links"
            to="/feed">
            FEED
          </NavLink>

          <NavLink
            // className="links linksLOGOUT"
            to="/"
            // onClick={(e) => signout(e)}
            >
            LOGOUT
          </NavLink>

        <Post />
    </div>
  )
}

export default UserPage