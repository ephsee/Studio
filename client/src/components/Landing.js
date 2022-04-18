import {NavLink} from 'react-router-dom'

function Landing() {

  let randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor3 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor4 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor5 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor6 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor7 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor8 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor9 = "#" + Math.floor(Math.random()*16777215).toString(16);

  return (
    <div>
        <div className="inputs headers big-font">
          <h1 style={{ color: randomColor9 }}>⫸</h1>
          <h1 style={{ color: randomColor1 }}>S</h1>
          <h1 style={{ color: randomColor2 }}>T</h1>
          <h1 style={{ color: randomColor3 }}>U</h1>
          <h1 style={{ color: randomColor4 }}>D</h1>
          <h1 style={{ color: randomColor5 }}>I</h1>
          <h1 style={{ color: randomColor6 }}>O</h1>
          <h1 style={{ color: randomColor8 }}>⫷</h1>
        </div>
        <h2 className="inputs headers" style={{ color: randomColor7 }}>WHERE CREATIVES CAN PROMOTE AND SUPPORT ARTISTS WORKS</h2>

        <NavLink
            className="inputs links headers" 
            to="/feed">
            WELCOME TO STUDIO
        </NavLink>
    </div>
  )
}

export default Landing