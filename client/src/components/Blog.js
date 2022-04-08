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

      const showBlog = posts.filter( p => p.user.discipline_id === 4).map( a => <div key={a.id}>{a.content}</div>)

      console.log(showBlog)


  return (

    <div>
        
        <NavLink
            // className="links"
            to="/feed">
            Studio
        </NavLink>

        Blog

        {showBlog}

    </div>
  )
}

export default Blog