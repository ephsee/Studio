import {NavLink} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Post from './Post'

function UserPage({authUser, posts, setPosts, deletePost}) {

  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      
  // const [full_name, setFull_name] = useState("")
  // const [email, setEmail] = useState("")
  // const [bio, setBio] = useState("")
  // const [pic, setPic] = useState("")
  // const [link1, setlink1] = useState("")
  // const [link2, setlink2] = useState("")
  // const [link3, setlink3] = useState("")
  const [showUpdate, setShowUpdate] = useState(false)

  // const updateData = {
  //   full_name,
  //   email,
  //   bio,
  //   pic,
  //   link1,
  //   link2,
  //   link3
  // }

  function updateForm(){
    setShowUpdate(!showUpdate)
  }

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
  // const postsAfterDelete = posts.filter( p => id !== p.id)

  function deletePost(id){
    console.log(id)
    fetch(`/posts/${id}`,{
        method: 'DELETE'})
    .then(r=>r.json())
    .then(console.log())
    // alert('user post removed')
    const postsAfterDelete = posts.filter( p => id !== p.id)
    setPosts(postsAfterDelete)
}

  console.log(posts)
  console.log(authUser)

  // if authUser === {error: 'No Active Users'} || {message: 'User Logged Out'} {
  //   setProfileView(false)
  // } else {
  //       setProfileView(true)
  // }
  // }

  // console.log(authUser.discipline_id)
  const count = posts.filter( p => p.user_id === authUser.id).length
  const userPostsRender = posts.filter( p => p.user_id === authUser.id).map( up => <div key={up.id}><p>{up.content}</p><button onClick={(e) => deletePost(up.id)}>x</button></div>).reverse()

  // const userPosts = posts.filter( p => p.user_id == authUser.id)
  
  // console.log(userPosts)

  return (
    <div>
          <NavLink
            className="links"
            to="/feed">
            Studio
          </NavLink>

          <div>

                <div className="inputs">
                  <button onClick={updateForm}>update</button>
                    {showUpdate ? <form>
                      <input type="text" name="full_name" placeholder="full name"></input>
                      <input type="text" name="email" placeholder="email"></input>
                      <input type="text" name="bio" placeholder="bio"></input>
                      <input type="text" name="pic" placeholder="pic"></input>
                      <input type="text" name="link1" placeholder="linkedin"></input>
                      <input type="text" name="link2" placeholder="instagram"></input>
                      <input type="text" name="link3" placeholder="twitter"></input>
                      <input  type="submit" name="submit"></input>
                    </form> : null}
                </div>

                <h1 style={{ color: randomColor }} className="inputs">User Page</h1>

                <div>
                    {/* <img alt={authUser.username} src={authUser.pic}/> */}
                    <h1 style={{ color: 'grey'}}>{authUser.username}</h1>
                    <h2>{authUser.full_name}</h2>
                    <p style={{ color: 'grey'}}>{authUser.bio}</p>
                    <p>{authUser.email}</p> 
                    <p style={{ color: 'grey'}}>{count} posts to date</p>
                    <p>member since: {authUser.created_at}</p>
                </div>

          {/* <NavLink
            // className="links linksLOGOUT"
            to="/"
            onClick={(e) => logOut(e)}
            >
            LOGOUT
          </NavLink> */}

                  <Post authUser={authUser} setPosts={setPosts} posts={posts}/>

                  <div>
                    {userPostsRender}
                  </div>
          </div>
    </div>
  )
}

export default UserPage