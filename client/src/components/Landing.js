import {NavLink} from 'react-router-dom'

function Landing() {

  let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor3 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor4 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor5 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor6 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor7 = Math.floor(Math.random()*16777215).toString(16);
  let styleColor1 = "#" + randomColor1
  let styleColor2 = "#" + randomColor2
  let styleColor3 = "#" + randomColor3
  let styleColor4 = "#" + randomColor4
  let styleColor5 = "#" + randomColor5
  let styleColor6 = "#" + randomColor6
  let styleColor7 = "#" + randomColor7;

  return (
    <div>
      <div className="inputs"><h1 style={{ color: styleColor1 }}>S</h1><h1 style={{ color: styleColor2 }}>T</h1><h1 style={{ color: styleColor3 }}>U</h1><h1 style={{ color: styleColor4 }}>D</h1><h1  style={{ color: styleColor5 }}>I</h1><h1 style={{ color: styleColor6 }}>O</h1></div>
        <h2 className="inputs" style={{ color: styleColor7 }}>WHERE CREATIVES CAN PROMOTE AND SUPPORT ARTISTS WORKS</h2>

        <NavLink
            className="inputs links"
            to="/feed">
            WELCOME TO STUDIO
        </NavLink>
    </div>
  )
}

export default Landing