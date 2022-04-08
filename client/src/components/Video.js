import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import { Player } from 'video-react';

function Video() {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('./posts')
        .then(r=>r.json())
        .then(setPosts)
      }, [])

      console.log(posts)

      // <div style="height:50px; width:100px">
      //     <Player
      //       playsInline
      //       poster="/assets/poster.png"
      //       src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      //       fluid={false}
      //       width={100%}
      //       height={100%}
      //     />
      // playsInline
      //   poster="/assets/poster.png"
      //   src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      //   fluid={false}
      //   width={480}
      //   height={272}
      // </div>

      

      const showPost = posts.filter( p => p.user.discipline_id === 2).map( a => <div key={a.id}><p>{a.content}</p><Player><source src={a.upload}/></Player></div>).reverse();

      // const showVideo = posts.filter( p => p.user.discipline_id === 2).map( a => <div key={a.id}>{a.content}</div>)

      // console.log(showVideo)

  return (
    <div>
        
        <NavLink
            // className="links"
            to="/feed">
            Studio
        </NavLink>

        Video

            {showPost}

    </div>
  )
}

export default Video