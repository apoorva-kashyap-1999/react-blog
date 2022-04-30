import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete account</span>
            </div>
            <form  className="settingsForm">
             <label>Profile Picture</label>
             <div className="settingsPP">
                 <img src='https://media.istockphoto.com/photos/cute-little-african-american-girl-looking-at-camera-picture-id1353379172?b=1&k=20&m=1353379172&s=170667a&w=0&h=ATdapJAP1vVUkk67vcgxlV-Lg4LuXJNSP8N6awcStSo=' alt=''/>
                 <label htmlFor='fileInput'>
                 <i class="settingsPPIcon fa-solid fa-user"></i>
                 </label>
                 <input type="file" id='fileInput' style={{display:"none"}} />
                 </div>
                 <label>Username</label>
                 <input type="text" placeholder="Apoorva" />
                 <label>E-mail</label>
                 <input type='email' placeholder="apoorva@gmail.com" />
                 <label>Password</label>
                 <input type='password' />
                 <button className='settingsSubmit'>Update</button>
            
            </form>
        </div>
            <Sidebar/>
    </div>
  )
}
