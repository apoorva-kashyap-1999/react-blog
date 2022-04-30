import { Link } from 'react-router-dom';
import './register.css'

export default function Register() {
    return (
      <div className="register">
          <span className="registerTitle">Register</span>
          <form action="" className="registerForm">
          <label>Username</label>
              <input className="registerInput" type="text" placeholdder="Username"/>
              <label>E-mail</label>
              <input className="registerInput" type="text" placeholdder="E-mail..."/>
              <label>Password</label>
              <input className="registerInput" type="password" placeholdder="Password..."/>
              <button className='registerButton'>Register</button>
          </form>
          <button className='registerLoginButton'>
            <Link  className="link" to="/login">Login</Link>
          </button>
      </div>
    );
  }
  