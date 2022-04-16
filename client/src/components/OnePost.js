import {NavLink} from 'react-router-dom'
import {useState} from 'react'


function OnePost({onePost}) {
    
    console.log(onePost)
    console.log(onePost.id)
    console.log(onePost.content)
    console.log(onePost.upload)
    console.log(onePost.user.username)
    console.log(onePost.user)
    console.log(onePost.comments)

    // const [addComment, setAddComment] = useState(false)
    const [comment, setComment] = useState("")
    const [post_id , setPostId] = useState(onePost.id)

    console.log(post_id)
  
  
    // function postClick(e){
    //   setAddComment(true)
    //   console.log(addComment)
    //   setPostId(e.id)
    //   console.log(e.id)
    //   console.log(e)
    // }
  
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
      setComment("")      
  }

  const showComments = onePost.comments.map( c => <div><p>{c.comment}</p></div>)



  return (

    <div>
            <div className="left">
                
                <NavLink
                    className="links"
                    to="/feed">
                    Studio
                </NavLink>

            </div>

        <div>


            <div>
                <div className="center">
                    <p>username: {onePost.user.username}</p>
                    <p>post name: {onePost.content}</p>
                    {/* {onePost.upload} */}
                    <p>user email: {onePost.user.email}</p>
                    <p>user linkedin: {onePost.user.link1}</p>
                    <p>user intagram: {onePost.user.link2}</p>
                    <p>user twitter: {onePost.user.link3}</p>
                    { onePost.comments.length === 0 ? null : <h2>others commented: {showComments}</h2> }
                </div>
            </div>

              <div className="center">
                <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment" value={comment}></input>
                <button onClick={postComment}>post</button>
              </div>              

        </div>
    </div>
  )

}

export default OnePost