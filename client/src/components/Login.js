import {useEffect, useState} from 'react'

function Login({setAuthUser}) {

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
    }

    //     useEffect(()=>{
    //     fetch("/authorized_user")
    //     .then(r => r.json())
    //     .then(setAuthUser)
    // }, [])

  return (

    <div className="inputs">Login
        <form>
            <input onChange={handleUsername} type="text" name="username" placeholder="username"></input>
            <input onChange={handlePassword}type="password" name="password" placeholder="password"></input>
            <input onClick={submitLogin} type="submit" name="Submit"></input>
        </form>
    </div>
  )

}

export default Login