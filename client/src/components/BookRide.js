import React, { useState } from 'react'
import { connectApi } from '../services/connectApi'
import ModalDisplay from '../components/ModalDisplay';
import Geocode from 'react-geocode'


const BookRide = ({TheBooking, setNotify, setModalVisible, modalVisible, position}) => {

  const initialState = {
    destination: "",
    distance: 0,
    cost: 0,
    paymethod: ""
  }

  const [gowhere, setGowhere] = useState([])
  const [distance, setDistance] = useState(0)
  const [herenow, setHerenow] = useState("")
  const [booking, setBooking] = useState(initialState)

  Geocode.setApiKey("AIzaSyCh8QAookantxXeMOy3-dhpiDtWw9GHp7w")

  Geocode.setLanguage("en");

  Geocode.setLocationType("ROOFTOP");

  Geocode.fromLatLng(position[0], position[1]).then(
  (response) => {
    const address = response.results[0].formatted_address;
    setHerenow(address)
  },
  (error) => {
    console.error(error);
  }
);

  const getDistance =(lat1, lon1, lat2, lon2) =>{
  const R = 6371; // Earth's radius in kilometers
  const dLat = (parseFloat(lat2) - parseFloat(lat1)) * Math.PI / 180;
  const dLon = (parseFloat(lon2) - parseFloat(lon1)) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return d;
}

  const handleChange = (e) =>{
    console.log(e.target.value)
    setBooking({...booking, [e.target.name]: e.target.value})
  }

  const handleRideBook = async (e) => {
    e.preventDefault();

    Geocode.fromAddress(booking.destination).then(
      (response) => {
        const {lat, lng} = response.results[0].geometry.location;
        setGowhere([lat,lng])
      },
      (error) => {
        console.error(error);
      }
    );

    console.log(position+"  , "+gowhere)
    const dist = getDistance(position[0], position[1], gowhere[0], gowhere[1])
    console.log(dist)
    setDistance(dist)

    try{
      const data = await new connectApi().setHeaders({'x-auth-token': window.sessionStorage.getItem('token')}).post('/booking', booking)
      TheBooking(data)
      console.log(data)
      setBooking(data)
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
            <ModalDisplay successdata={booking} modalVisible={modalVisible} setModalVisible={setModalVisible} distance={distance}/>
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Fill ride booking details</h2>
                <form onSubmit={handleRideBook}>
                  <div className="form-outline mb-4">
                    <input type="text" id="currentlocation" name="currentlocation" className="form-control form-control-lg" onChange={handleChange} value={herenow}/>
                    <label className="form-label" htmlFor="currentlocation">Current Location</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="test" id="destination" name="destination" className="form-control form-control-lg" onChange={handleChange} value={booking.destination}/>
                    <label className="form-label" htmlFor="destination">Destination</label>
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
                    <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Book now</button>
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