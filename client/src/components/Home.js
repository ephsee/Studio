import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Switch, Route, Redirect} from 'react-router-dom'
import Create from './Create'
import Login from './Login'

function Home({posts, setPosts, authUser, setAuthUser}) {

  // const [morePosts, setMorePosts] = useState([])
  // const [showUser, setShowUser] = useState([])
  // const [authUser, setAuthUser] = useState([])

  // const [addComment, setAddComment] = useState(false)

  console.log(authUser)
  
  
  // useEffect(()=>{
    //     fetch("/authorized_user")
    //     .then(r => r.json())
    //     .then(setAuthUser)
    // }, [])
    
    useEffect(()=> {
        fetch('./posts')
        .then(r=>r.json())
        .then(setPosts)
      }, [])

  // const [showComments, setShowComments] = useState(false)
  // const [comment, setComment] = useState("")
      
  // function clicker(){
  //   setShowComments(!showComments)
  // }

  // function newComment(e){
  //   setComment(e.target.value)
  //   console.log(e.target.value)
  // }


  // const [posts, setPosts] = useState([])

  function logOut(e) {
    e.preventDefault()

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

  // console.log(posts.comments)
  // console.log(authUser)

  // function postClick(e){
  //   setAddComment(!addComment)
  //   console.log(addComment)
  //   console.log(e)
  // }

  // { addComment ? <div><input type="text" placeholder="add comment"></input><button>post</button></div> : null }

  // {error: 'No Active Users'}

  const showPosts = posts.map(p => <div className="lists" key={p.id}><h3>{p.content}</h3><p>{p.comments.map( c => " || " + c.comment + " || " )}</p></div>).reverse()
  // {showComments ? <input onChange={(e) => newComment(e)} type="text" placeholder="share a comment"></input> : null}
  // <button onClick={clicker}>comments</button>{showComments ? <li>{p.comments.map( c => c.comment)}</li> : null}

  return (

    <div>

          <div>

            {/* <UserPage user={showUser}/> */}

            <NavLink
                className="links"
                to="/art">
                ART
            </NavLink>
            <NavLink
                className="links"
                to="/music">
                MUSIC
            </NavLink>
            <NavLink
                className="links"
                to="/video">
                VIDEO
            </NavLink>
            <NavLink
                className="links"
                to="/blog">
                BLOG
            </NavLink>

            <NavLink
                className="links"
                to="/profile">
                PROFILE
            </NavLink>

            <NavLink
                className="links"
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