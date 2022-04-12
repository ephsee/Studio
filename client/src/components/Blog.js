import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Blog({posts}) {

    // const [posts, setPosts] = useState([])

    // useEffect(()=> {
    //     fetch('./posts')
    //     .then(r=>r.json())
    //     .then(setPosts)
    //   }, [])

    //   console.log(posts)

      const showBlog = posts.filter( p => p.user.discipline_id === 4)
      console.log(showBlog)

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

      const showPost = posts.filter( p => p.user.discipline_id === 4).map( a => <div key={a.id}><p>{a.content}</p><textarea id="content" cols="50" rows="20" readOnly type='text/plain' value={a.upload}></textarea></div>).reverse();

      // const showBlog = posts.filter( p => p.user.discipline_id === 4).map( a => <div key={a.id}>{a.content}</div>)

      // console.log(showBlog)


  return (

    <div>
        
        <NavLink
            className="links"
            to="/feed">
            Studio
        </NavLink>

        <h1 className="inputs">Blog</h1>

        {showPost}
        {/* {renderBlogs} */}

    </div>
  )
}

export default Blog