// Write your code here.
import './index.css'

const NavBar = () => {
  const a = 1

  return (
    <div className="navbarcontainer">
      <div className="logocontainer">
        <img
          className="navimage"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p className="navheading">Emoji Game</p>
      </div>
      <div className="scorecontainer">
        <p className="navscores">score:0</p>
        <p className="navscores">Top Score:3</p>
      </div>
    </div>
  )
}

export default NavBar
