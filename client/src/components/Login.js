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
            if(err.hasOwnProperty("response")){
                setError(err.response.data)
                return
            }
            setError(err.message)
          }
    }

    return (
        <div className='form-signin w-50 m-auto mt-5 pt-4 text-center vh-100'>
            <form onSubmit={handleLogin}>
                <h1 className="h3 mb-5 fw-normal">Please sign in</h1>
                {(error !== "") ? (<div className="error"><h4>{error}</h4></div>) : ""}
                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={({target}) => setEmail(target.value)}/>
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={({target}) => setPassword(target.value)} />
                <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3 mt-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    );
}
 
export default Login;