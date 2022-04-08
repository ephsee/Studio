import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Video() {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('./posts')
        .then(r=>r.json())
        .then(setPosts)
      }, [])

      console.log(posts)

      const showVideo = posts.filter( p => p.user.discipline_id === 2).map( a => <div key={a.id}>{a.content}</div>)

      console.log(showVideo)

  return (
    <div>
        
        <NavLink
            // className="links"
            to="/feed">
            Studio
        </NavLink>

        Video

            {showVideo}

    </div>
  )
}

export default Video