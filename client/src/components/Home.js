import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Switch, Route, Redirect} from 'react-router-dom'
import Create from './Create'
import Login from './Login'

function Home({posts, authUser, setAuthUser}) {

  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let styleColor1 = "#" + randomColor1
  // let randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let styleColor2= "#" + randomColor2

  // const [morePosts, setMorePosts] = useState([])
  // const [showUser, setShowUser] = useState([])
  // const [authUser, setAuthUser] = useState([])

  // const [addComment, setAddComment] = useState(false)
  const [active, setActive] = useState(false)

  console.log(authUser)
  
  
  // useEffect(()=>{
    //     fetch("/authorized_user")
    //     .then(r => r.json())
    //     .then(setAuthUser)
    // }, [])
    
    // useEffect(()=> {
    //     fetch('./posts')
    //     .then(r=>r.json())
    //     .then(setPosts)
    //   }, [])

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

  console.log(posts)
  // console.log(authUser)

  // function postClick(e){
  //   setAddComment(!addComment)
  //   console.log(addComment)
  //   console.log(e)
  // }

  // { addComment ? <div><input type="text" placeholder="add comment"></input><button>post</button></div> : null }

  // {error: 'No Active Users'}

  // useEffect(()=>{
  //   authUser !== [] ? setActive(false) : setActive(true)
  // }, (false))
  // console.log(active)

  const showPosts = posts.map(p => <div className="lists" key={p.id}><p>{p.content}</p><p style={{ color: 'grey'}}>{p.comments.map( c => " ~ " + c.comment )}</p></div>).reverse()
  // {showComments ? <input onChange={(e) => newComment(e)} type="text" placeholder="share a comment"></input> : null}
  // <button onClick={clicker}>comments</button>{showComments ? <li>{p.comments.map( c => c.comment)}</li> : null}

  return (

    <div>

          <div>

            {/* <UserPage user={showUser}/> */}
            <div className="left">
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
            </div>
            
            <div className="right">
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
            </div>

            <div className="right">
            <Login setAuthUser={setAuthUser}/>
            <Create />
            </div>

            <div className="inputs">
                {/* <img src={authUser.pic} alt={authUser.username}/> */}
                <h1 style={{color : randomColor}}>{authUser.username}</h1>
            </div>

          </div>

          <div>
          {showPosts}
          </div>
    </div>

  )
}

export default Home