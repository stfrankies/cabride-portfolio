import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { connectApi } from '../services/connectApi'

const Register = ({userRegister, setNotify}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  //const [password2, setPassword2] = useState('')

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

    const handleRegister = async(e) =>{
        e.preventDefault();
        if (!validateEmail(email)) {
          setNotify(['error',"Email is not valid!"])
          setTimeout(()=>setNotify([]), 5000)
          return
        }

        // if(password1 !== password2){
        //   setError('password is not consistent')
        //   console.log(password1)
        //   console.log(password2)
        //   return
        // }

        let data = {}
        try {
          data = await new connectApi().post('/users', {name:name, email:email, password:password1})
          if (data.hasOwnProperty('err')) {
            setNotify(['error', data.err])
            return
          }
          userRegister(data)
          setNotify(['success','User registered Success'])
          Navigate('/')
        } catch (err) {
          console.log(err.message)
        }
    }

    return ( 
  <div className="d-flex align-items-center vh-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <form onSubmit={handleRegister}>
                <div className="form-outline mb-4">
                  <input type="text" id="yourname" className="form-control form-control-lg" onChange={({target}) => setName(target.value)} />
                  <label className="form-label" htmlFor="yourname">Your Name</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="youremail" className="form-control form-control-lg" onChange={({target}) => setEmail(target.value)}/>
                  <label className="form-label" htmlFor="youremail">Your Email</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="password1" className="form-control form-control-lg" onChange={({target}) => setPassword1(target.value)}/>
                  <label className="form-label" htmlFor="password1">Password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="tos" />
                  <label className="form-check-label" htmlFor="tos">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body"><u>Login here</u></a></p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}
 
export default Register;