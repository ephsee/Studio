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
    setAddComment(true)
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
}

    // const [posts, setPosts] = useState([])

    // useEffect(()=> {
    //     fetch('./posts')
    //     .then(r=>r.json())
    //     .then(setPosts)
    //   }, [])

    //   console.log(posts)

      // <ReactAudioPlayer src={a.upload} />

      // <audio controls src={a.upload}>"Your browser does not support the<code>audio</code> element.</audio>

      const showPost = posts.filter( p => p.user.discipline_id === 3).map( a => <div onClick={(e) => postClick(a)} key={a.id}><p className="inputs">{a.content}</p><audio controls src={a.upload}></audio></div>).reverse();

      // const showMusic = posts.filter( p => p.user.discipline_id === 3).map( a => <div key={a.id}>{a.content} <ReactAudioPlayer src={a.upload} /> </div>)

      // console.log(showMusic)


  return (
    <div>
        
        <NavLink
            className="links"
            to="/feed">
            Studio
        </NavLink>
        
        <h1 style={{ color: randomColor }} className="inputs">Music</h1>

        { addComment ? <div className="inputs"><input onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment"></input><button onClick={postComment}>post</button></div> : null }
        <div className="inputs grid">
        {showPost}
        </div>
    </div>
  )
}

export default Music