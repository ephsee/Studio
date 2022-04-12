import {useEffect, useState} from 'react'

function Create({login}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [discipline, setDiscipline] = useState("")

    function handleUsername(e){
        setUsername(e.target.value)
        console.log(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    function handleDiscipline(e){
        setDiscipline(e.target.value)
        console.log(e.target.value)
    }

    function submitCreate(e){
        e.preventDefault()

        const user = {
            username: username,
            password: password,
            discipline_id: discipline
        }

        fetch('/users',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(console.log)
    }

    return (

        <div className="inputs">Create

            <form>
                <input onChange={handleUsername} type="text" name="username" placeholder="username"></input>
                <input onChange={handlePassword}type="password" name="password" placeholder="password"></input>
                {/* <input onChange={handleDiscipline}type="number" name="dicipline_id" placeholder="dicipline_id"></input> */}
                <select onChange={handleDiscipline}>
                    <option>select discipline</option>
                    <option value="1">Art</option>
                    <option value="2">Video</option>
                    <option value="3">Music</option>
                    <option value="4">Blog</option>
                </select>
                <input onClick={(e) => submitCreate(e)} type="submit" name="Submit"></input>
            </form>

        </div>
    )
}

export default Create
