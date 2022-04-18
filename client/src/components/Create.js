import {useState} from 'react'

function Create({login}) {

    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

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
            discipline_id: discipline,
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"
        }

        fetch('/users',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(console.log)
        setUsername("")
        setPassword("")
        setDiscipline("")
    }

    return (

        <div style={{ color: randomColor }}> ⫘ Create Account ⫘

            <form>
                <input onChange={handleUsername} type="text" name="username" placeholder="username" value={username}></input>
                <input onChange={handlePassword}type="password" name="password" placeholder="password" value={password}></input>
                <select onChange={handleDiscipline}>
                    <option value="">select discipline</option>
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
