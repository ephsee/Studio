import './App.css';
import {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import UserPage from './components/UserPage'
import Art from './components/Art'
import Music from './components/Music'
import Blog from './components/Blog'
import Video from './components/Video'

function App() {
  
  const [posts, setPosts] = useState([])

  const [authUser, setAuthUser] = useState([])

  useEffect(()=>{
      fetch("/authorized_user")
      .then(r => r.json())
      .then(setAuthUser)
  }, [])

    useEffect(()=>{
      fetch('/posts')
      .then(r=>r.json())
      .then(setPosts)
  }, [])

  return (

    <div>
        <div>

          <div>

            <main>

              <Switch>

                <Route exact path="/">
                  <Landing/>
                </Route>

                <Route path="/profile">
                  <UserPage authUser={authUser} setAuthUser={setAuthUser} posts={posts} setPosts={setPosts}/>
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

              </Switch>

            </main>

          </div>
        
      </div>

    </div>
  );
}

export default App;
