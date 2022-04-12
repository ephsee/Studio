import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';

function Music({posts}) {

    // const [posts, setPosts] = useState([])

    // useEffect(()=> {
    //     fetch('./posts')
    //     .then(r=>r.json())
    //     .then(setPosts)
    //   }, [])

    //   console.log(posts)

      // <ReactAudioPlayer src={a.upload} />

      // <audio controls src={a.upload}>"Your browser does not support the<code>audio</code> element.</audio>

      const showPost = posts.filter( p => p.user.discipline_id === 3).map( a => <div key={a.id}><p>{a.content}</p><audio controls src={a.upload}>Your browser does not support the<code>audio</code> element.</audio></div>).reverse();

      // const showMusic = posts.filter( p => p.user.discipline_id === 3).map( a => <div key={a.id}>{a.content} <ReactAudioPlayer src={a.upload} /> </div>)

      // console.log(showMusic)


  return (
    <div>
        
        <NavLink
            className="links"
            to="/feed">
            Studio
        </NavLink>
        
        <h1 className="inputs">Music</h1>

        {showPost}

    </div>
  )
}

export default Music