import React from 'react'
import { BsAt } from "react-icons/bs";
import { BsPersonPlus, BsFillPersonXFill } from "react-icons/bs";

function User({id, name, lastName, avatar, email, onClickToAdd, isAdded, datauser}) {
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
        <div onClick={() => onClickToAdd(datauser)} className='plus'> { isAdded ? <BsFillPersonXFill/>: <BsPersonPlus/>}</div>
    </div>
    
  )
}

export default User