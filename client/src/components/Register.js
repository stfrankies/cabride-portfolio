import React from 'react'

const Register = () => {

    const handleRegister = (e) =>{
        e.preventDefault();
        console.log("User register successful")
    }

    return ( 
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" name="firstname" placeholder="Enter your firstname" required/>
                <input type="text" name='lastname' placeholder='Enter your lastname' required/>
                <input type="email" name="email" placeholder='Enter your email' required/>
                <input type="password" name="password" placeholder='Choose a password' required/>
                <input type="submit" name='submit' value="REGISTER" />
            </form>
        </div>
    );
}
 
export default Register;