import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import Post from './Post'

function UserPage({authUser, setAuthUser, posts, setPosts}) {

  let randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
      
  const [full_name, setFull_name] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [pic, setPic] = useState("")
  const [link1, setLink1] = useState("")
  const [link2, setLink2] = useState("")
  const [link3, setLink3] = useState("")
  
  const [showUpdate, setShowUpdate] = useState(false)

  function handleFullName(e){
    setFull_name(e.target.value)
    console.log(full_name)
  }
  function handleEmail(e){
    setEmail(e.target.value)
    console.log(email)
  }
  function handleBio(e){
    setBio(e.target.value)
    console.log(bio)
  }
  function handlePic(e){
    setPic(e.target.value)
    console.log(pic)
  }
  function handleLink1(e){
    setLink1(e.target.value)
    console.log(link1)
  }
  function handleLink2(e){
    setLink2(e.target.value)
    console.log(link2)
  }
  function handleLink3(e){
    setLink3(e.target.value)
    console.log(link3)
  }

  const userId = authUser.id
  console.log(userId)

  console.log(authUser)
  console.log(authUser.id)

  function submitUpdate(e) {
    e.preventDefault()
    
    const updateData = {
    full_name: full_name,
    eamil: email,
    bio: bio,
    pic: pic,
    link1: link1,
    link2: link2,
    link3: link3,
  }

    fetch(`/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(updateData)
    })
    .then(r=>r.json())
    .then(setAuthUser)
    setShowUpdate(false)
  }

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

  // console.log(posts)
  // console.log(authUser)

  // if authUser === {error: 'No Active Users'} || {message: 'User Logged Out'} {
  //   setProfileView(false)
  // } else {
  //       setProfileView(true)
  // }
  // }

  // console.log(authUser.discipline_id)
  const count = posts.filter( p => p.user_id === authUser.id).length

  const userPostsRender = posts.filter( p => p.user_id === authUser.id).map( up => {
        return (
        <div key={up.id}>
          <p>{up.content}</p>
          <button onClick={(e) => deletePost(up.id)}>x</button>
        </div>
        )
  }).reverse()

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
                    {showUpdate ? <form onSubmit={(e) => submitUpdate(e)}>
                      <input onChange={handleFullName} type="text" name="full_name" placeholder="full name"></input>
                      <input onChange={handleEmail} type="text" name="email" placeholder="email"></input>
                      <input onChange={handleBio} type="text" name="bio" placeholder="bio"></input>
                      <input onChange={handlePic} type="text" name="pic" placeholder="pic"></input>
                      <input onChange={handleLink1} type="text" name="link1" placeholder="linkedin"></input>
                      <input onChange={handleLink2} type="text" name="link2" placeholder="instagram"></input>
                      <input onChange={handleLink3} type="text" name="link3" placeholder="twitter"></input>
                      <input type="submit" name="submit"></input>
                    </form> : null}
                </div>

                <h1 style={{ color: randomColor1 }} className="inputs">User Page</h1>

                <div>
                    <img alt={authUser.pic} width="300px" src={authUser.pic}/>
                    <h1 style={{ color: randomColor2 }}>{authUser.username}</h1>
                    <h2 style={{ color: 'grey'}}>{authUser.full_name}</h2>
                    <p style={{ color: 'grey'}}>{authUser.bio}</p>
                    <p>{count} posts to date</p>
                    <p>member since: {authUser.created_at}</p>
                    <p style={{ color: 'grey'}}>{authUser.email}</p> 
                    <p style={{ color: 'grey'}}>LinkedIn: {authUser.link1}</p>
                    <p style={{ color: 'grey'}}>Instgram: {authUser.link2}</p>
                    <p style={{ color: 'grey'}}>Twitter: {authUser.link3}</p>
                </div>

                  <Post authUser={authUser} setPosts={setPosts} posts={posts}/>

                  <div>
                    {userPostsRender}
                  </div>
          </div>
    </div>
  )
}

export default UserPage