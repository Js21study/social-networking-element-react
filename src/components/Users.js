import React from 'react'
import { BsSearch } from "react-icons/bs";
import Loading from './Loading';
import User from './User';

function Users({dataUsers, isLoading, searchValue, onChangeSearchValue, toAdd, onClickToAdd}) {
    const arr= [1,2,3]
  return (
    <div className='card'>
        <div className='input'>
        <input onChange={(e) => onChangeSearchValue(e)} value={searchValue} type="text" />
        <span className='search'><BsSearch/></span>
        </div>
        {isLoading
        ? <div> {arr.map(a => <div className='user-cage'> <Loading key={a}/> </div>)} </div>
        : <div> {dataUsers.filter( dataUser => {
          const fullName = dataUser.first_name + dataUser.last_name;
          return fullName.toLowerCase().includes(searchValue.toLowerCase()) || dataUser.email.toLowerCase().includes(searchValue.toLowerCase())
        })
          .map(datauser => <User isAdded={toAdd.includes(datauser.id)} onClickToAdd={onClickToAdd} key={datauser.id} name={datauser.first_name} lastName={datauser.last_name} avatar={datauser.avatar} email={datauser.email}/>)}</div>
        }
        
       <a href="/"><button>Send</button></a>
    </div>
  )
}

export default Users