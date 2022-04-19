import {NavLink, useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import Create from './Create'
import Login from './Login'

function Home({posts, authUser, setAuthUser, setOnePost, setPosts}) {

  // const [postComm, setPostComm] = useState([])

  // console.log(authUser.username)

  let history = useHistory()

  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  function logOut(e) {
    e.preventDefault()

    fetch("/logout", {
    method: 'DELETE'})
    .then(r=>r.json())
    .then(setAuthUser)
    // history.push('/')
  }

  function postOnClick(e){
      // console.log(e)
      setOnePost(e)
      history.push(`/posts/${e.id}`)
  }

  useEffect(()=>{
    fetch('/posts')
    .then(r => r.json())
    .then(setPosts)
  },[])

  const showPosts = posts.map(p => {
    return (
      <div className="center profile-box" key={p.id} onClick={(e) => postOnClick(p)}>
        <p style={{ color: 'tan'}}>{ p.user.username }</p>
        <p>{" ◂ " + p.content + " ▸ " }</p>
        <p style={{ color: 'grey'}}>{p.comments.map( c => " ● " + c.comment )}</p>
        </div>
    )
  }).reverse()

  return (

    <div>
      
        <div>

          <div>

            <div className="left">

              <NavLink
                  className="links headers"
                  to="/art">
                  ART
              </NavLink>
              <NavLink
                  className="links headers"
                  to="/music">
                  MUSIC
              </NavLink>
              <NavLink
                  className="links headers"
                  to="/video">
                  VIDEO
              </NavLink>
              <NavLink
                  className="links headers"
                  to="/blog">
                  BLOG
              </NavLink>

            </div>
            
            <div className="right">

              {authUser.username===undefined ? null : <NavLink
                  className="links headers"
                  to="/profile">
                  PROFILE
              </NavLink>}              

              {authUser.username===undefined ? null : <NavLink
                  className="links headers"
                  onClick={(e) => logOut(e)}
                  to="/">
                  LOGOUT
              </NavLink>}

            </div>

          </div>

            <div className={authUser.username === undefined ? "login-create inputs center" : "logged-in inputs center"} >
                  <div className="profile-box">
                    <div>
                      <h1 className="center headers" style={{color : randomColor}}>⫸ {authUser.username === undefined ? "Studio" : authUser.username} ⫷</h1>
                    </div>
                    <Create />
                    <Login setAuthUser={setAuthUser}/>
                  </div>
            </div>

        </div>

            <div className="grid">
              {showPosts}
            </div>
          
    </div>

  )
}

export default Home