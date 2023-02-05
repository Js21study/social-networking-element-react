import React from 'react'
import { BsAt } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";

function User({name, lastName, avatar, email}) {
  return (
    <div className='user-cage'>
    <div className='info'>
        <img className='avatar' src={avatar} alt={name} />
       <div>
       <h2>{name} {lastName}</h2>
        <div className='email'><span><BsAt/></span> 
        <p>{email}</p></div>
        </div> 
        </div>
        <div className='plus'><BsPersonPlus/></div>
    </div>
    
  )
}

export default User