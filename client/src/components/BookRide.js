import React, { useState } from 'react'

const BookRide = () => {

    const [currentlocation, setCurrentLocation] = useState("")
    const [destination, setDestination] = useState("")
    const [paymethod, setPaymethod] = useState("")
    const [cost, setCost] = useState(0)
    const [distance, setDistance] = useState(0)
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const handleRideBook = (e) => {
        e.preventDefault();
        console.log("You are booked now!")
    }

    return ( 
        <div className="d-flex align-items-center vh-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Fill ride booking details</h2>
              {(error !== "") ? (<div className="error"><h4>{error}</h4></div>) : ""}
               {(success !== "") ? (<div className="success"><h4>{success}</h4></div>) : ""}
              <form onSubmit={handleRideBook}>

                <div className="form-outline mb-4">
                  <input type="text" id="currentlocation" className="form-control form-control-lg" onChange={({target}) => setCurrentLocation(target.value)} />
                  <label className="form-label" htmlFor="yourname">Current Location</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="destination" className="form-control form-control-lg" onChange={({target}) => setDestination(target.value)}/>
                  <label className="form-label" htmlFor="youremail">Destination</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="number" id="distance" className="form-control form-control-lg" onChange={({target}) => setDistance(target.value)}/>
                  <label className="form-label" htmlFor="youremail">Destination</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="number" id="cost" className="form-control form-control-lg" onChange={({target}) => setCost(target.value)}/>
                  <label className="form-label" htmlFor="youremail">Destination</label>
                </div>
                <div className="form-outline mb-4">
                    <select type="password" id="password1" className="form-control form-control-lg" onChange={({target}) => setPaymethod(target.value)}>
                        <option>Choose a payment method</option>
                        <option>Visa Card</option>
                        <option>Debit Card</option>
                        <option>Cash on point</option>
                    </select>
                  <label className="form-label" htmlFor="password1">Payment Method</label>
                </div>
                <div className="form-check d-flex mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="tos" />
                  <label className="form-check-label" htmlFor="tos">
                    Save my payment method for future use.
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Book now</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}
 
export default BookRide;