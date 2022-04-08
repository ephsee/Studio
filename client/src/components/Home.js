import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
// import UserPage from './UserPage'
import Login from './Login'

function Home() {

  const [showUser, setShowUser] = useState([])
  const [posts, setPosts] = useState([])

  // useEffect(()=>{
  //     fetch("/authorized_user")
  //     .then(r => r.json())
  //     .then(setShowUser)
  // }, [])

  useEffect(()=> {
    fetch('./posts')
    .then(r=>r.json())
    .then(setPosts)
  }, [])

  function logOut() {

    fetch("/logout", {
    method: 'DELETE'})
    .then(r=>r.json())
    .then(setShowUser)

  }

  console.log(posts)

  const showPosts = posts.map(p => <div key={p.id}>{p.content}</div>)

  return (

    <div>Home

          <div>

            {/* <UserPage user={showUser}/> */}

            <NavLink
                // className="links"
                to="/art">
                ART
            </NavLink>
            <NavLink
                // className="links"
                to="/music">
                MUSIC
            </NavLink>
            <NavLink
                // className="links"
                to="/video">
                VIDEO
            </NavLink><NavLink
                // className="links"
                to="/blog">
                BLOG
            </NavLink>

            <NavLink
                // className="links"
                to="/profile">
                PROFILE
            </NavLink>

            <NavLink
                // className="links linksLOGOUT"
                to="/"
                onClick={logOut}
                >
                LOGOUT
            </NavLink>

            <Login login={setShowUser}/>

          </div>

          {showPosts}

    </div>

  )
}

export default Home