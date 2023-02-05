import React from 'react'
import { BsSearch } from "react-icons/bs";
import Loading from './Loading';
import User from './User';

function Users({dataUsers, isLoading}) {
    const arr= [1,2,3]
  return (
    <div className='card'>
        <div className='input'>
        <input  type="text" />
        <span className='search'><BsSearch/></span>
        </div>
        {isLoading
        ? <div> {arr.map(a => <div className='user-cage'> <Loading key={a}/> </div>)} </div>
        : <div> {dataUsers.map(datauser => <User key={datauser.id} name={datauser.first_name} lastName={datauser.last_name} avatar={datauser.avatar} email={datauser.email}/>)}</div>
        }
        
        <button>Send</button>
    </div>
  )
}

export default Users