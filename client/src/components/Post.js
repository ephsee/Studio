import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

function Post({authUser, posts, setPosts}) {

    // let history = useHistory();
    const [content, setContent] = useState("")
    const [text, setText] = useState("")
    // const [posts, setPosts] = useState([])

    const [heading, setHeading] = useState("")
    const [blog, setBlog] = useState("")

    console.log(authUser.discipline_id)

    function handleHeading(e){
        console.log(e.target.value)
        setHeading(e.target.value)
    }

    function handleBlog(e){
        console.log(e.target.value)
        setBlog(e.target.value)
    }

    console.log(heading)
    console.log(blog)

// useEffect(()=>{
//     fetch('/posts')
//     .then(r=>r.json())
//     .then(setPosts)
// }, [])


// console.log(posts)
// console.log(content)

// console.log(authUser.discipline_id)

// const showPosts = posts.map( p => <div key={p.id}>{p.info}</div>)

// const [show, setShow] = useState({})

// console.log(show)

function handleContent(e){
    console.log(e.target.files[0])
    setContent(e.target.files[0])
    // setShow(e.target.value)
}

function handleText(e){
    console.log(e.target.value)
    setText(e.target.value)
}

function submitBlog(e){
        e.preventDefault()
        const newBlog = {
            content: heading,
            blog: blog,
            user_id: authUser.id
        }

        fetch('/posts',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            // headers:{'Content-Type': 'multipart/form-data'},
            // headers:{'Content-Type': 'image'},
            // 'Content-Type', 'text/xml'
            // headers:{'Authorization': localStorage.token},
            // body: JSON.stringify(formData)
            body: JSON.stringify(newBlog)
            // body: formData
            })
            .then(r => r.json())
            // .then(console.log(newBlog))
            .then(data => setPosts([data, ...posts].reverse()))
            // .then(setPosts)
        }
        


function handleSubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('content', text)
    formData.append('upload', content)
    formData.append('user_id', authUser.id)

    // debugger

    console.log(formData)

    // http://127.0.0.1:3000/

    fetch('/posts',{
        method:'POST',
        // headers:{'Content-Type': 'application/json'},
        // headers:{'Content-Type': 'multipart/form-data'},
        // headers:{'Content-Type': 'image'},
        // 'Content-Type', 'text/xml'
        // headers:{'Authorization': localStorage.token},
        // body: JSON.stringify(formData)
        // body: JSON.stringify(newPost)
        body: formData
        })
        .then(r => r.json())
        .then(data => setPosts([data, ...posts].reverse()))
        // .then(setPosts)
    }

    // const postsAfterDelete = posts.filter( p => id !== p.id)
    // setPosts(postsAfterDelete)

    return (
    <div>
            <div className="inputs">
                <h1>create a new post</h1>
            </div>

            { authUser.discipline_id === 4 ? <div>
                <form className="inputs">
                    <input onChange={handleHeading} type="text" name="heading" placeholder="heading"></input><br></br>
                    <textarea onChange={handleBlog} type="text" name="blog" placeholder="blog content" rows="20" cols="50"></textarea><br></br>
                    <input onClick={(e) => submitBlog(e)} type="submit" name="Submit"></input>
                </form>
            </div> :

            <div>
                <form className="inputs">
                    <input onChange={handleContent} type="file" accept="image/*" name="file"></input><br></br>
                    <input onChange={handleText} type="text" name="content" placeholder="upload details"></input><br></br>
                    <input onClick={(e) => handleSubmit(e)} type="submit" name="Submit"></input>
                </form>
            </div> }
    </div>
    );
}

export default Post