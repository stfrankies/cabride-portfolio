import React from 'react'

const Notification = ({notification}) =>{
  if(notification.length === 0) return null;

  if(notification[0] === 'success')
  return <div className='success'><h5>{notification[1]}</h5></div>;

  if(notification[0] === 'error')
  return <div className='error'><h5>{notification[1]}</h5></div>
}

export default Notification