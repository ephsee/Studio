import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Art({posts}) {

  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  const [showComments, setShowComments] = useState(false)
  // const [comment, setComment] = useState("")
      
  // function clicker(){
  //   setShowComments(!showComments)
  // }

  // function newComment(e){
  //   setComment(e.target.value)
  //   console.log(e.target.value)
  // }

  const [addComment, setAddComment] = useState(false)
  const [comment, setComment] = useState("")
  const [post_id , setPostId] = useState("")

  console.log(comment)

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

    //   useEffect(()=> {
    //     fetch('./posts')
    //     .then(r=>r.json())
    //     .then(setPosts)
    //   }, [])

      
      // var users = [
          //     { user: "Name1",geo:{lat:'12',long:'13'} },
          //     { user: "Name2",geo:{lat:'12',long:'13'}, age: 2 },
          //     { user: "Name2",geo:{lat:'12',long:'13'} },
          //     { user: "Name3",geo:{lat:'12',long:'13'}, age: 4 }
          //   ];
          
          //     for (let {user, age = "DEFAULT AGE", geo: {lat, long}} of users) {
              //         console.log(user, age, lat, long);
              //   }
              const showPost = posts.filter( p => p.user.discipline_id === 1).map( a => <div onClick={(e) => postClick(a)} key={a.id}><p>{a.content}</p><img className="posts" width="400px" src={a.upload}/></div>).reverse();

              console.log(showPost)

            //   const showMe = Object.values(showPost)
            //   console.log(showMe)

            //   <img src={props.post.featured_image.url}>

            //   const showMe = showPost.map( a => <div key={a.[]}>{a}</div>)


            //   const showMe = showPost.filter( a => a[0])
            //   const showMe = showPost.map( a => new URL(a[url]))

            //   console.log(showMe)

            //   const URL = require("url").URL;

            //   const showMe = showPost.filter( u => u.upload).url
            //   const showArtPost = showPost.map( a => <div key={a.id}>{a.content} <img alt={a.id} src={a.upload}/></div>)
              
              
            //   console.log(posts)
        
            //   function showMe(showPost) {
            //     for (let {upload} of showPost){
            //         return (url)
            //     }
            //   }
        
            //   console.log(showMe())
              

    //   const { name, realName } = hero;

    // const hero = {
    //     name: 'Batman',
    //     realName: 'Bruce Wayne',
    //     address: {
    //       city: 'Gotham'
    //     }
    //   };
    //   // Object destructuring:
    //   const { address: { city } } = hero;
    //   city; // => 'Gotham'

    //   const showImage = showPost.
    //   console.log(showImage)

    // var ourStorage = {
    //     "desk": {
    //       "drawer": "stapler"
    //     },
    //     "cabinet": {
    //       "top drawer": {
    //         "folder1": "a file",
    //         "folder2": "secrets"
    //       },
    //       "bottom drawer": "soda"
    //     }
    //   }
    //   ourStorage.cabinet["top drawer"].folder2;  // "secrets"
    //   ourStorage.desk.drawer; // "stapler"

  return (
    <div>
        
        <NavLink
            className="links"
            to="/feed">
            Studio
        </NavLink>

        <h1 style={{ color: randomColor }} className="inputs">Art</h1>

        { addComment ? <div className="inputs"><input onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment"></input><button onClick={postComment}>post</button></div> : null }
        
        {showPost}
        {/* {showMe} */}

    </div>
  )
}

export default Art