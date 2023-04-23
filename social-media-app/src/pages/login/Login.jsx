import { Link } from 'react-router-dom';
import './login.scss';

function Login() {
  return (
    <div className='login'>
    <div className="card">
        <div className="left">
            <h1>Hello World.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eius officiis eligendi ab in? Numquam commodi iusto qui facere debitis doloribus blanditiis rem labore. Reiciendis ipsam suscipit architecto sed dolorem.</p>
            <span>Don'nt you have a account?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='Username'></input>
                <input type='password' placeholder='Password'></input><br></br>
                <button>Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
