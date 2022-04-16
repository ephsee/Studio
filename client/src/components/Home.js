import {NavLink} from 'react-router-dom'
import Create from './Create'
import Login from './Login'

function Home({posts, authUser, setAuthUser}) {

  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  function logOut(e) {
    e.preventDefault()

    fetch("/logout", {
    method: 'DELETE'})
    .then(r=>r.json())
    .then(setAuthUser)
  }

  const showPosts = posts.map(p => {
    return (
      <div className="center profile-box" key={p.id}>
        <p>{ p.user.username + " | " }</p>
        <p>{" | " + p.content + " | " }</p>
        <p style={{ color: 'grey'}}>{p.comments.map( c => " | " + c.comment )}</p>
        </div>
    )
  }).reverse()

  return (

    <div>

          <div>

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
                  onClick={(e) => logOut(e)}
                  className="links"
                  to="/">
                  LOGOUT
              </NavLink>

            </div>

          </div>

            <div className="right">
                  <div>
                    <Login setAuthUser={setAuthUser}/>
                    <Create />
                    <div>
                      <h1 className="center" style={{color : randomColor}}>{authUser.username}</h1>
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