import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const ModalDisplay = ({modalVisible, setModalVisible, successdata}) => {

    console.log(successdata)

    const booking = successdata.booking

    return ( 
    <>
      <Modal show={modalVisible} >
        <Modal.Header closeButton>
          <Modal.Title>Booking Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Destination: {booking.destination}</p>
            <p>Distance: {booking.distance} Km</p>
            <p>Price: {booking.cost} €</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
    );
}
 
export default ModalDisplay;