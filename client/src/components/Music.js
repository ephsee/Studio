import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Music() {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('./posts')
        .then(r=>r.json())
        .then(setPosts)
      }, [])

      console.log(posts)

      const showMusic = posts.filter( p => p.user.discipline_id === 3).map( a => <div key={a.id}>{a.content}</div>)

      console.log(showMusic)


  return (
    <div>
        
        <NavLink
            // className="links"
            to="/feed">
            Studio
        </NavLink>
        
        Music

        {/* {showMusic} */}

    </div>
  )
}

export default Music