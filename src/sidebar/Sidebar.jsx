import "./sidebar.css"

export default function Sidebar
() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME </span>
            <img src="https://images.pexels.com/photos/9938365/pexels-photo-9938365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id eligendi omnis necessitatibus quisquam. Incidunt placeat</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
