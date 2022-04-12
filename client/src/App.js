// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import UserPage from './components/UserPage'
import Art from './components/Art'
import Music from './components/Music'
import Blog from './components/Blog'
import Video from './components/Video'

function App() {
  
  // const [authUser, setAuthUser] = useState([])
  const [posts, setPosts] = useState([])

  const [authUser, setAuthUser] = useState([])

  useEffect(()=>{
      fetch("/authorized_user")
      .then(r => r.json())
      .then(setAuthUser)
      // document.location.reload(true)
  }, [])

  // function logOut() {

  //   fetch("/logout", {
  //   method: 'DELETE'})
  //   .then(r=>r.json())
  //   .then(setAuthUser)
  //   // document.location.reload(true)

  // }

  // function logOut() {

  //   fetch("/logout", {
  //   method: 'DELETE'})
  //   .then(r=>r.json())
  //   .then({setAuthUser})
  //   // document.location.reload(true)

  // }

  // useEffect(()=>{
  //     fetch("/authorized_user")
  //     .then(r => r.json())
  //     .then(setAuthUser)
  // }, [])


    useEffect(()=>{
      fetch('/posts')
      .then(r=>r.json())
      .then(setPosts)
  }, [])

  // const [content, setContent] = useState("")

  // console.log(posts)
  // console.log(content)

  // // const showPosts = posts.map( p => <div key={p.id}>{p.info}</div>)

  // // const [show, setShow] = useState({})

  // // console.log(show)

  // function handleContent(e){
  //     console.log(e.target.files[0])
  //     setContent(e.target.files[0])
  //     // setShow(e.target.value)
  // }

  // function handleSubmit(){

  //     // e.PreventDefault()

  //     const formData = new FormData()
  //     formData.append('content', "something brand new upload")
  //     formData.append('upload', content)
  //     formData.append('user_id', 1)

  //     // const newPost = {
  //     //     upload: content,
  //     //     info: "something new upload",
  //     //     user_id: 1
  //     // }

  //     // debugger

  //     console.log(formData)

  //     // http://127.0.0.1:3000/

  //     fetch('/posts',{
  //         method:'POST',
  //         // headers:{'Content-Type': 'application/json'},
  //         // headers:{'Content-Type': 'multipart/form-data'},
  //         // headers:{'Content-Type': 'image'},
  //         // 'Content-Type', 'text/xml'
  //         // headers:{'Authorization': localStorage.token},
  //         // body: JSON.stringify(formData)
  //         // body: JSON.stringify(newPost)
  //         body: formData
  //       })
  //       .then(r => r.json())
  //       .then(console.log)   
  //     }

  return (

    <div>
        <div>

          <div>

            <main>
            <Switch>
              <Route exact path="/profile">
                <UserPage authUser={authUser} posts={posts} setPosts={setPosts}/>
              </Route>
              <Route path="/feed">
                <Home posts={posts} authUser={authUser} setAuthUser={setAuthUser}/>
              </Route>
              <Route path="/art">
                <Art posts={posts} setPosts={setPosts}/>
              </Route>
              <Route path="/music">
                <Music posts={posts} setPosts={setPosts}/>
              </Route>
              <Route path="/blog">
                <Blog posts={posts} setPosts={setPosts}/>
              </Route>
              <Route path="/video">
                <Video posts={posts} setPosts={setPosts}/>
              </Route>

              <Route exact path="/">
                <Landing/>
              </Route>

            </Switch>
            </main>

          </div>
        
      </div>

      {/* <div className="App App-header"> */}

              {/* <Home/> */}

              {/* hello!!!

              <form>
                  <input onChange={handleContent} type="file" accept="image/*" name="file"></input>
                  <input onClick={handleSubmit} type="submit" name="Submit"></input>
              </form> */}
        
      {/* </div> */}

    </div>
  );
}

export default App;
