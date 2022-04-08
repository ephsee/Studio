import {useEffect, useState} from 'react'

function Login({login}) {

    const [username, setUsername] = useState("")   
    const [password, setPassword] = useState("")

    function handleUsername(e){
        setUsername(e.target.value)
        console.log(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
        console.log(e.target.value)        
    }

    function submitLogin(){

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
        .then(login)
    }

  return (

    <div>Login
        <form>
            <input onChange={handleUsername} type="text" name="username" placeholder="username"></input>
            <input onChange={handlePassword}type="password" name="password" placeholder="password"></input>
            <input onClick={submitLogin} type="submit" name="Submit"></input>
        </form>
    </div>
  )

}

export default Login