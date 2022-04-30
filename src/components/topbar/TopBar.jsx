import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user=false;
  return (
    <div className='top'> 
    <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
    <div className="topCenter">
        <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
            <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
        </ul>
    </div>
    <div className="topRight">
        <img className="topImg" src="https://images.pexels.com/photos/7789144/pexels-photo-7789144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}
