import {NavLink, useHistory} from 'react-router-dom'
import {useState} from 'react'


function OnePost({onePost}) {

    let history = useHistory()
    
    // console.log(onePost)
    // console.log(onePost.id)
    // console.log(onePost.content)
    // console.log(onePost.upload)
    // console.log(onePost.user.username)
    // console.log(onePost.user.email)
    // console.log(onePost.discipline)
    // console.log(onePost.comments)

    const [addComment, setAddComment] = useState(true)
    const [comment, setComment] = useState("")
    const [post_id] = useState(onePost.id)

    // console.log(post_id)
  
  
    // function postClick(e){
    //   setAddComment(true)
    //   console.log(addComment)
    //   setPostId(e.id)
    //   console.log(e.id)
    //   console.log(e)
    // }
  
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
      setComment("")
      setAddComment(false)
      history.push('/feed')
  }

  const showComments = onePost.comments.map( c => <div key={c.id}><p>{c.comment}</p></div>)



  return (

    <div>
            <div>
                
                <NavLink
                    className="links headers"
                    to="/feed">
                    Studio
                </NavLink>

            </div>

        <div className="inputs">


            <div className="center">
                <div className="profile-box">
                    <p className="headers">username: {onePost.user.username}</p>
                    <p>page: {onePost.discipline}</p>
                    <p>description: {onePost.content}</p>
                    {/* {onePost.upload} */}
                    <p>user email: {onePost.user.email}</p>
                    <p>user linkedin: {onePost.user.link1}</p>
                    <p>user intagram: {onePost.user.link2}</p>
                    <p>user twitter: {onePost.user.link3}</p>
                    { onePost.comments.length === 0 ? null : <h2>others commented: {showComments}</h2> }
                </div>
              {addComment ? <div>
                <input className="center" onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment" value={comment}></input>
                <button className="a-button" onClick={postComment}>post</button>
              </div> : null}    
            </div>


        </div>
    </div>
  )

}

export default OnePost