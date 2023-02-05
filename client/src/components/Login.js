import React from 'react'

const Login = () => {

    const handleLogin = (e) =>{
         e.preventDefault();
        console.log("User login successful!")
    }

    return (
        <div className='form-signin w-50 m-auto mt-5 pt-4 text-center vh-100'>
            <form onSubmit={handleLogin}>
                <h1 class="h3 mb-5 fw-normal">Please sign in</h1>
                <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
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