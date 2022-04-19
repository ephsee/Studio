import {useState} from 'react'

function Post({authUser, posts, setPosts}) {
    
    const [content, setContent] = useState("")
    const [text, setText] = useState("")

    const [heading, setHeading] = useState("")
    const [blog, setBlog] = useState("")

    function handleHeading(e){
        setHeading(e.target.value)
    }

    function handleBlog(e){
        setBlog(e.target.value)
    }

    function handleContent(e){
        setContent(e.target.files[0])
    }

    function handleText(e){
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
            body: JSON.stringify(newBlog)
            })
            .then(r => r.json())
            .then(data => setPosts([...posts, data]))
            setHeading("")
            setBlog("")
        }
        
    function handleSubmit(e){
        e.preventDefault()

        const formData = new FormData()
        formData.append('content', text)
        formData.append('upload', content)
        formData.append('user_id', authUser.id)

        fetch('/posts',{
            method:'POST',
            body: formData
            })
            .then(r => r.json())
            .then(data => setPosts([...posts, data]))
            setContent("")
            setText("")
        }

    return (
    <div className="right profile-box center">
            <div className="inputs">
                <h1>create a new post</h1>
            </div>

            { authUser.discipline_id === 4 ? <div>
                <form>
                    <input className="center" onChange={handleHeading} type="text" name="heading" placeholder="heading"></input><br></br>
                    <textarea className="center" onChange={handleBlog} type="text" name="blog" placeholder="blog content" rows="20" cols="50"></textarea><br></br>
                    <input className="center" onClick={(e) => submitBlog(e)} type="submit" name="Submit"></input>
                </form>
            </div> :

            <div>
                <form>
                    <input className="center" onChange={handleContent} type="file" accept="image/*" name="file"></input><br></br>
                    <input className="center" onChange={handleText} type="text" name="content" placeholder="upload details"></input><br></br>
                    <input className="center" onClick={(e) => handleSubmit(e)} type="submit" name="Submit"></input>
                </form>
            </div> }
    </div>
    );
}

export default Post