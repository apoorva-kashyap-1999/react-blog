import { Link } from 'react-router-dom';
import './login.css'

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label>E-mail</label>
            <input className="loginInput" type="text" placeholdder="E-mail..."/>
            <label>Password</label>
            <input className="loginInput" type="password" placeholdder="Password..."/>
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>
        <Link className='link' to="/register">Register</Link></button>
    </div>
  );
}
