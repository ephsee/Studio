import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Art() {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('./posts')
        .then(r=>r.json())
        .then(setPosts)
      }, [])

      console.log(posts)

      const showArt = posts.filter( p => p.user.discipline_id === 1).map( a => <div key={a.id}>{a.content}</div>)

      console.log(showArt)

  return (
    <div>
        
        <NavLink
            // className="links"
            to="/feed">
            Studio
        </NavLink>

        Art

        {showArt}

    </div>
  )
}

export default Art