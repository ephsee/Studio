import {useState} from 'react'

function Login({setAuthUser}) {

    // let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    const [username, setUsername] = useState("")   
    const [password, setPassword] = useState("")

    function handleUsername(e){
        setUsername(e.target.value)
        // console.log(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
        // console.log(e.target.value)        
    }

    function submitLogin(e){
        e.preventDefault()

        const user = {
            username: username,
            password: password
        }

        fetch('./login',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(setAuthUser)
        setUsername("")
        setPassword("")
    }

  return (

    <div>◂ Login ▸  
        <form>
            <input className="center" onChange={handleUsername} type="text" name="username" placeholder="username" value={username}></input>
            <input className="center" onChange={handlePassword}type="password" name="password" placeholder="password" value={password}></input>
            <input className="center" onClick={submitLogin} type="submit" name="Submit"></input>
        </form>
    </div>
  )

}

export default Login