import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import { Player } from 'video-react';

function Video({posts, setPosts}) {

    // const [posts, setPosts] = useState([])

    const [addComment, setAddComment] = useState(false)
    const [comment, setComment] = useState("")
    const [post_id , setPostId] = useState("")

    console.log(comment)

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
    
  }
    // onClick={(e) => postClick(p)}

    //   useEffect(()=> {
    //     fetch('./posts')
    //     .then(r=>r.json())
    //     .then(setPosts)
    //   }, [])

    //   console.log(posts)

      // fluid={false} width={480} height={272}

      // <div style="height:50px; width:100px">
      //     <Player
      //       playsInline
      //       poster="/assets/poster.png"
      //       src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      //       fluid={false}
      //       width={100%}
      //       height={100%}
      //     />
      // playsInline
      //   poster="/assets/poster.png"
      //   src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      //   fluid={false}
      //   width={480}
      //   height={272}
      // </div>

      

      const showPost = posts.filter( p => p.user.discipline_id === 2).map( a => <div onClick={(e) => postClick(a)} key={a.id}><p>{a.content}</p><Player className="posts" fluid={false} width={480} height={272} src={a.upload}></Player></div>).reverse();

      // const showVideo = posts.filter( p => p.user.discipline_id === 2).map( a => <div key={a.id}>{a.content}</div>)

      // console.log(showVideo)

  return (
    <div>
        
        <NavLink
            className="links"
            to="/feed">
            Studio
        </NavLink>

        Video

            { addComment ? <div><input onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment"></input><button onClick={postComment}>post</button></div> : null }

            {showPost}

    </div>
  )
}

export default Video