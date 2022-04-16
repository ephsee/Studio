import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { Player } from 'video-react';

function Video({posts, setPosts}) {

  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // const [posts, setPosts] = useState([])

    const [addComment, setAddComment] = useState(false)
    const [comment, setComment] = useState("")
    const [post_id , setPostId] = useState("")

    // console.log(comment)

    function postClick(e){
      setAddComment(!addComment)
      console.log(addComment)
      setPostId(e.id)
      console.log(e.id)
      console.log(e)
    }

    function postComment(e){

      const newComment = {
        post_id,
        comment
      }

      
      fetch('/comments',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newComment)
      })
      .then(r => r.json())
      .then(console.log)
      setAddComment(false)
      setPosts([...posts])
  }    

      const showPost = posts.filter( p => p.user.discipline_id === 2).map( a => {
          return(
            <div className="center" onClick={(e) => postClick(a)} key={a.id}>
              <p className="center">{a.content}</p>
              <Player className="posts" width={480} height={272} fluid={false} muted={false} src={a.upload} poster=""></Player>
              { addComment ? <div className="center">
                <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment"></input>
                <button onClick={postComment}>post</button>
                </div> : null }
              </div>
          )
        }).reverse();

  return (
    <div>

        <div className="left">
        
          <NavLink
              className="links"
              to="/feed">
              Studio
          </NavLink>

        </div>

            <h1 style={{ color: randomColor }} className="center">Video</h1>

            {/* { addComment ? <div className="inputs">
              <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment"></input>
              <button onClick={postComment}>post</button>
              </div> : null } */}

            <div className="center vids">
              {showPost}
            </div>
    </div>
  )
}

export default Video