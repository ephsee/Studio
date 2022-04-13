import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

// import fs from 'fs'
// import { PDFReader } from 'react-read-pdf';

// const fileReader = new FileReader();

function Blog({posts}) {

  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  
  const [addComment, setAddComment] = useState(false)
  const [comment, setComment] = useState("")
  const [post_id , setPostId] = useState("")

  const [text, setText] = useState()

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

    // const showPost = posts.filter( p => p.user.discipline_id === 2).map( a => <div onClick={(e) => postClick(a)} key={a.id}><p>{a.content}</p><Player className="posts" fluid={false} width={480} height={272} src={a.upload}></Player></div>).reverse();

    // const [posts, setPosts] = useState([])

    // useEffect(()=> {
    //     fetch('./posts')
    //     .then(r=>r.json())
    //     .then(setPosts)
    //   }, [])

    //   console.log(posts)

      // const showBlog = posts.filter( p => p.user.discipline_id === 4)
      // console.log(showBlog)

      // const readThis = new FileReader(posts[6].upload)

      // console.log(readThis)

      // let files = data;

      // if(files.length == 0) return;

      // const file = files[0];

      // showFile = async (e) => {
      //   e.preventDefault()
      //   const reader = new FileReader()
      //   reader.onload = async (e) => { 
      //     const text = (e.target.result)
      //     console.log(text)
      //     alert(text)
      //   };
      //   reader.readAsText(e.target.files[0])
      // }
      // const showThings = posts.filter( p => p.user.discipline_id === 4)

      // let reader = new FileReader();
      // function renderBlogs(showThings) {
      //   posts.forEach(post => {
      //   const reader = new FileReader()
      //   reader.readAsBlob(post.upload)}
      //   )
      // }

      // const data = new Blob([showThings[]], { type: 'text/plain' })
      // console.log(data)
      // console.log(renderBlogs())

      // const reader = new FileReader()

      //   reader.onload = event => {
      //     const text = reader.result
      //     document.getElementById('content').innerHTML = text
      //   }

      //   reader.onerror = (e) => {
      //     console.error(e)
      //   }

      //   reader.readAsText(showThings[])

      // const url = "http://www.puzzlers.org/pub/wordlists/pocket.txt"
      // fetch(url)
      //   .then( r => r.text() )
      //   .then( t => console.log(t))
      // <MobilePDFReader url="http://localhost:3000/test.pdf"/>

      // console.log(posts[20].upload)

      // const reader = new FileReader();
      // const handleFile = (file) => {
      // reader.onloadend = handleFile;
      // reader(file);
      // };

      // const blog = new Blob()

      // readFile
      // readFileSync

      // const showPost = posts.filter( p => p.user.discipline_id === 4).map( a => <div onClick={(e) => postClick(a)} key={a.id}><p>{a.content}</p>{new ReadableStream(a.upload)}</div>).reverse();
      // const showPost = posts.filter( p => p.user.discipline_id === 4).map( a => <div onClick={(e) => postClick(a)} key={a.id}><p>{a.content}</p>{fileReader.readAsDataURL(a.upload)}</div>).reverse();

      //   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      //   {[1, 2, 3].map((value) => (
      //     <ListItem
      //       key={value}
      //       disableGutters
      //       secondaryAction={
      //         <IconButton>
      //           <CommentIcon />
      //         </IconButton>
      //       }
      //     >
      //       <ListItemText primary={Line item ${value}} />
      //     </ListItem>
      //   ))}
      // </List>

      // npm install @mui/material @emotion/react @emotion/styled

      // const texts = posts.filter( p => p.user.discipline_id === 4).map( u => u.upload)
      
      // const readFile = async (file) => {
      //   // for (let url in file){
      //     // file.forEach( url => {
      //       await fetch(file).then(r=>r.text()).then(text => {
      //         // console.log(text)
      //         setText(text)
      //       })
      //     // })
      //   // }
      // }

      // console.log(readFile(texts))
      // console.log(text)



      // <textarea id="content" cols="50" rows="20" readOnly type='text' value={readFile(a.upload)}></textarea>



      const showPost = posts.filter( p => p.user.discipline_id === 4).map( a => <div className="blogs" onClick={(e) => postClick(a)} key={a.id}> <h3 className="inputs">~ {a.content}</h3> <p> {a.blog} </p></div>).reverse()

      // const showPost = posts.filter( p => p.user.discipline_id === 4).map( a => <div onClick={(e) => postClick(a)} key={a.id}><p>{a.content}</p>{text(a.upload)}</div>).reverse();

      // const showBlog = posts.filter( p => p.user.discipline_id === 4).map( a => <div key={a.id}>{a.content}</div>)

      // const blobView = new Blob(showBlog.upload)
      // console.log(blobView)

      // const reader = new FileReader();
      // const blog = reader(showBlog)
      // console.log(blog)

      // console.log(showBlog)


  return (

    <div>
        
        <NavLink
            className="links"
            to="/feed">
            Studio
        </NavLink>

        <h1 style={{ color: randomColor }} className="inputs">Blog</h1>

        { addComment ? <div className="inputs"><input onChange={(e) => setComment(e.target.value)} type="text" placeholder="add comment"></input><button onClick={postComment}>post</button></div> : null }

        <div className="inputs">
          {showPost}
        </div>
    </div>
  )
}

export default Blog