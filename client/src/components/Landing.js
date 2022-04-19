import {NavLink} from 'react-router-dom'

function Landing() {

  let randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor3 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor4 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor5 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor6 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor7 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor8 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let randomColor9 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor10 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor11 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor12 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor13 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor14 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor15 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor16 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor17 = "#" + Math.floor(Math.random()*16777215).toString(16);
  // let randomColor18 = "#" + Math.floor(Math.random()*16777215).toString(16);

  return (
    <div style={{
      backgroundColor: "rgba(0,0,0)",
      borderRadius: 10,}}>
        <div className="center headers center">
        <h1 className="studio" style={{
            color: randomColor9,
            }}>⫷⫷⫷⫷⫸⫸⫸⫸</h1>
          <h1 className="studio" style={{
            color: randomColor1,
            }}>S</h1>
          <h1 className="studio" style={{
            color: randomColor2,
            }}>T</h1>
          <h1 className="studio" style={{
            color: randomColor3,
            }}>U</h1>
          <h1 className="studio" style={{
            color: randomColor4,
            }}>D</h1>
          <h1 className="studio" style={{
            color: randomColor5,
            }}>I</h1>
          <h1 className="studio" style={{
            color: randomColor6,
            }}>O</h1>
          <h1 className="studio" style={{
            color: randomColor8,
            }}>⫷⫷⫷⫷⫸⫸⫸⫸</h1>
        </div>
        {/* <h2 className="center headers studio" style={{ color: randomColor7 }}>WHERE CREATIVES CAN PROMOTE AND SUPPORT ARTISTS WORKS</h2> */}

        <NavLink
            className="inputs links headers" 
            to="/feed">
            enter
        </NavLink>
    </div>
  )
}

export default Landing