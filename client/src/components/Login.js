import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { connectApi } from '../services/connectApi'


const Login = ({userLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleLogin = async(e) =>{
         e.preventDefault();
         try {
            userLogin(await new connectApi().post('/auth', {email:email, password:password}))
            navigate('/')
            return
          } catch (err) {
            console.log("Email or password incorrect!")
            setError("Email or password incorrect!")
          }
    }

    return (
        <div className='form-signin w-50 m-auto mt-5 pt-4 text-center vh-100'>
            <form onSubmit={handleLogin}>
                <h1 class="h3 mb-5 fw-normal">Please sign in</h1>
                {(error !== "") ? (<div className="error"><h4>{error}</h4></div>) : ""}
                <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={({target}) => setEmail(target.value)}/>
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={({target}) => setPassword(target.value)} />
                <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3 mt-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    );
}
 
export default Login;