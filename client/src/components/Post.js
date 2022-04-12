import {useEffect, useState} from 'react'

function Post({authUser, posts, setPosts}) {

// useEffect(()=>{
//     fetch('/posts')
//     .then(r=>r.json())
//     .then(setPosts)
// }, [])

const [content, setContent] = useState("")
const [text, setText] = useState("")
// const [posts, setPosts] = useState([])

// console.log(posts)
console.log(content)

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

function handleSubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('content', text)
    formData.append('upload', content)
    formData.append('user_id', authUser.id)

    // const newPost = {
    //     upload: content,
    //     info: "something new upload",
    //     user_id: 1
    // }

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
        .then(setPosts([...posts]))
    }


    return (
    <div>
            <div className="inputs">
                <h1>create a new post</h1>
            </div>
            <form className="inputs">
                <input onChange={handleContent} type="file" accept="image/*" name="file"></input><br></br>
                <input onChange={handleText} type="text" name="content" placeholder="upload details"></input><br></br>
                <input onClick={(e) => handleSubmit(e)} type="submit" name="Submit"></input>
            </form>
        
    </div>
    );
}

export default Post