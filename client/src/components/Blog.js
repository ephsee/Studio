import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Blog() {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('./posts')
        .then(r=>r.json())
        .then(setPosts)
      }, [])

      console.log(posts)

      const showBlog = posts.filter( p => p.user.discipline_id === 4)
      console.log(showBlog)

      // const readThis = new FileReader(posts[6].upload)

      // console.log(readThis)

      const showPost = posts.filter( p => p.user.discipline_id === 4).map( a => <div key={a.id}><p>{a.content}</p>{a.upload}</div>).reverse();

      // const showBlog = posts.filter( p => p.user.discipline_id === 4).map( a => <div key={a.id}>{a.content}</div>)

      // console.log(showBlog)


  return (

    <div>
        
        <NavLink
            // className="links"
            to="/feed">
            Studio
        </NavLink>

        Blog

        {showPost}

    </div>
  )
}

export default Blog