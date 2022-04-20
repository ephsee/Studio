import {useState} from 'react'
import {NavLink} from 'react-router-dom'
// import ReactAudioPlayer from 'react-audio-player';

function Music({posts}) {

  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

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
    e.preventDefault()

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
    setComment("")
}

    const showPost = posts.filter( p => p.user.discipline_id === 3).map( a => {
        return(
            <div className="center" key={a.id}>
              <h3 className="page-head" onClick={(e) => postClick(a)}>{a.content} ⨝ {a.user.username}</h3>
              <audio className="posts" controls src={a.upload}></audio>
              { addComment ? 
              <div className="center">
                <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment"></input>
                <button className="a-button" onClick={postComment}>post</button>
              </div>
              : null }
            </div>
        )
    }).reverse();

  return (
    <div>
        <div>
        <NavLink
            className="links headers"
            to="/feed">
            Studio
        </NavLink>
        </div>
        
        <h1 style={{ color: randomColor }} className="center headers page-head">⫸ Music ⫷</h1>

        {/* { addComment ? 
          <div className="inputs">
            <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment"></input>
            <button onClick={postComment}>post</button>
          </div>
           : null } */}
          <div className="blogs">
            {showPost}
          </div>
    </div>
  )
}

export default Music