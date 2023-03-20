import React, { useState } from 'react'
import { connectApi } from '../services/connectApi'
import ModalDisplay from './ModalDisplay'

const BookRide = ({TheBooking, setNotify}) => {

  const initialState = {
    currentlocation: "",
    destination: "",
    distance: 0,
    cost: 0,
    paymethod: ""
  }

  const [booking, setBooking] = useState(initialState)
  const [modalVisible, setModalVisible] = useState(false)
  const [successdata, setSuccessData] = useState([])


  const handleChange = (e) =>{
    console.log(e.target.value)
    setBooking({...booking, [e.target.name]: e.target.value})
  }

  const handleRideBook = async (e) => {
    e.preventDefault();
    
    let data = {}

    try{
      data = await new connectApi().setHeaders({'x-auth-token': window.sessionStorage.getItem('token')}).post('/booking', booking)
      TheBooking(data)
      setSuccessData(data)
      setBooking(initialState)
      setModalVisible(true)
      setNotify(['success','Successfully added to the database'])
      setTimeout(()=>setNotify([]), 5000)
    } catch(err){
      setNotify(['error', err.message])
      setTimeout(()=> setNotify([]), 5000)
    }
  }

  return (
    <div className="d-flex align-items-center vh-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Fill ride booking details</h2>
                <form onSubmit={handleRideBook}>
                  <div className="form-outline mb-4">
                    <input type="text" id="currentlocation" name="currentlocation" className="form-control form-control-lg" onChange={handleChange} value={booking.currentlocation}/>
                    <label className="form-label" htmlFor="currentlocation">Current Location</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="test" id="destination" name="destination" className="form-control form-control-lg" onChange={handleChange} value={booking.destination}/>
                    <label className="form-label" htmlFor="destination">Destination</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="number" id="distance" name="distance" className="form-control form-control-lg" onChange={handleChange} value={booking.distance}/>
                    <label className="form-label" htmlFor="distance">Distance (Km)</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="number" id="cost" name="cost" className="form-control form-control-lg" onChange={handleChange} value={booking.cost}/>
                    <label className="form-label" htmlFor="cost">Cost (€)</label>
                  </div>
                  <div className="form-outline mb-4">
                    <select type="password" id="paymethod" name="paymethod" className="form-control form-control-lg" onChange={handleChange} value={booking.paymethod}>
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
                <ModalDisplay modalVisible={modalVisible} setModalVisible={setModalVisible} successdata={successdata}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRide;