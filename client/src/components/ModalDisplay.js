import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const ModalDisplay = ({modalVisible, setModalVisible, successdata, distance}) => {

  const cost = parseFloat(distance * 4).toFixed(2)

    return ( 
    <>
      <Modal show={modalVisible} >
        <Modal.Header closeButton>
          <Modal.Title>Booking Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Destination: {successdata.booking?.destination}</p>
            <p>Distance: {distance} Km</p>
            <p>Price: {cost} € (rate 4€/Km)</p>
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