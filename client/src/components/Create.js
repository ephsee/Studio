import {useEffect, useState} from 'react'

function Create() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function submitCreate(){

        const user = {
            username: username,
            password: password
        }

        fetch('./users',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(login)
    }

    return (

        <div>Create

            <form>
                <input onChange={handleUsername} type="text" name="username" placeholder="username"></input>
                <input onChange={handlePassword}type="password" name="password" placeholder="password"></input>
                <input onClick={submitCreate} type="submit" name="Submit"></input>
            </form>

        </div>
    )
}

export default Create
