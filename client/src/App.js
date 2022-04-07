// import logo from './logo.svg';
import './App.css';
// import {useEffect, useState} from 'react'
import Home from './components/Home'

function App() {

  //   useEffect(()=>{
  //     fetch('/posts')
  //     .then(r=>r.json())
  //     .then(setPosts)
  // }, [])

  // const [content, setContent] = useState("")
  // const [posts, setPosts] = useState([])

  // console.log(posts)
  // console.log(content)

  // // const showPosts = posts.map( p => <div key={p.id}>{p.info}</div>)

  // // const [show, setShow] = useState({})

  // // console.log(show)

  // function handleContent(e){
  //     console.log(e.target.files[0])
  //     setContent(e.target.files[0])
  //     // setShow(e.target.value)
  // }

  // function handleSubmit(){

  //     // e.PreventDefault()

  //     const formData = new FormData()
  //     formData.append('content', "something brand new upload")
  //     formData.append('upload', content)
  //     formData.append('user_id', 1)

  //     // const newPost = {
  //     //     upload: content,
  //     //     info: "something new upload",
  //     //     user_id: 1
  //     // }

  //     // debugger

  //     console.log(formData)

  //     // http://127.0.0.1:3000/

  //     fetch('/posts',{
  //         method:'POST',
  //         // headers:{'Content-Type': 'application/json'},
  //         // headers:{'Content-Type': 'multipart/form-data'},
  //         // headers:{'Content-Type': 'image'},
  //         // 'Content-Type', 'text/xml'
  //         // headers:{'Authorization': localStorage.token},
  //         // body: JSON.stringify(formData)
  //         // body: JSON.stringify(newPost)
  //         body: formData
  //       })
  //       .then(r => r.json())
  //       .then(console.log)   
  //     }


  return (
    <div className="App App-header">

            <Home/>

            {/* hello!!!

            <form>
                <input onChange={handleContent} type="file" accept="image/*" name="file"></input>
                <input onClick={handleSubmit} type="submit" name="Submit"></input>
            </form> */}
      
    </div>
  );
}

export default App;
