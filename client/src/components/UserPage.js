import {NavLink} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Post from './Post'

function UserPage({authUser, posts, setPosts}) {

  // const [showUser, setShowUser] = useState([])

  // useEffect(()=>{
  //   fetch("/authorized_user")
  //   .then(r => r.json())
  //   .then(setShowUser)
  // }, [])

  // const [posts, setPosts] = useState([])

  //   useEffect(()=> {
  //       fetch('./posts')
  //       .then(r=>r.json())
  //       .then(setPosts)
  //     }, [])

  //     console.log(posts)

  // function logOut() {

  //   fetch("/logout", {
  //   method: 'DELETE'})
  //   .then(r=>r.json())
  //   .then(console.log)
    // document.location.reload(true)

  // }

  console.log(posts)
  console.log(authUser)

  // console.log(authUser.discipline_id)

  const userPosts = posts.filter( p => p.user_id == authUser.id).map( up => <div key={up.id}><p>{up.content}</p></div>).reverse()
  
  // console.log(userPosts)

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

        <Post authUser={authUser} setPosts={setPosts}/>

            <div>
            {userPosts}
            </div>
    </div>
  )
}

export default UserPage