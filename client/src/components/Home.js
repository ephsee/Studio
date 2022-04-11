import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Switch, Route, Redirect} from 'react-router-dom'
import Create from './Create'
import Login from './Login'

function Home({posts, authUser, setAuthUser}) {

  // const [posts, setPosts] = useState([])
  // const [showUser, setShowUser] = useState([])
  // const [authUser, setAuthUser] = useState([])

  // useEffect(()=>{
  //     fetch("/authorized_user")
  //     .then(r => r.json())
  //     .then(setAuthUser)
  // }, [])

  // useEffect(()=> {
  //   fetch('./posts')
  //   .then(r=>r.json())
  //   .then(setPosts)
  // }, [])


  // const [posts, setPosts] = useState([])

  function logOut() {

    fetch("/logout", {
    method: 'DELETE'})
    .then(r=>r.json())
    .then(setAuthUser)
    // document.location.reload(true)

  }

  // function logOut() {

  //   fetch("/logout", {
  //   method: 'DELETE'})
  //   .then(r=>r.json())
  //   .then({setAuthUser})
  //   // document.location.reload(true)

  // }

  console.log(posts)
  console.log(authUser)

  // {error: 'No Active Users'}

  const showPosts = posts.map(p => <div key={p.id}>{p.content}</div>).reverse()

  return (

    <div>StudioHome

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
            </NavLink>
            <NavLink
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
                onClick={(e) => logOut(e)}
                >
                LOGOUT
            </NavLink>

            <Login setAuthUser={setAuthUser}/>

            <Create />

          </div>

          {showPosts}

    </div>

  )
}

export default Home