import React from 'react'
import Male from '../assets/Images/femaleProfile.jpg'
const Message = () => {
  return (
    <div className='message_componrnt'>
        <img src={Male} alt="" />
        <div>
            <h6>Jhenna</h6>
            <p>Lorem ipsum dolor sit amet......</p>
            <small>4 Dec 2017</small>
        </div>
    </div>
  )
}

export default Message