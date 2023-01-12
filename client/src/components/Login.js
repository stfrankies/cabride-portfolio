import React from 'react'

const Login = () => {
    return (
        <article>
            <form>
                <div className='form-input'>
                    <label htmlFor='username'>Username: </label>
                    <input name='username' type='text'/>
                </div>
                <div className='form-input'>
                    <label htmlFor='password'>Password: </label>
                    <input name='password' type='password'/>
                </div>
                <div className='form-input'>
                    <input name='submit' type='submit'/>
                </div>
            </form>
        </article>  
    );
}
 
export default Login;