import {NavLink} from 'react-router-dom'

function Landing() {
  return (
    <div>
      <h1>STUDIO - WHERE CREATIVES CAN PROMOTE AND SUPPORT ARTISTS WORKS</h1>

        <NavLink
            className="links"
            to="/feed">
            WELCOME TO STUDIO
        </NavLink>
    </div>
  )
}

export default Landing