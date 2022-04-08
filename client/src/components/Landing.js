import {NavLink} from 'react-router-dom'

function Landing() {
  return (
    <div>Landing

        <NavLink
            // className="links"
            to="/feed">
            FEED
        </NavLink>
    </div>
  )
}

export default Landing