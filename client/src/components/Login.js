import React from 'react'

const Login = () => {

    const handleLogin = (e) =>{
         e.preventDefault();
        console.log("User login successful!")
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder='Enter your email' required/>
                <input type="password" name="password" placeholder='Enter your password' required/>
                <input type="submit" name='submit' value="LOGIN" />
            </form>
        </div>
    );
}
 
export default Login;