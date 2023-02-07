import React from 'react'


function Final({toAdd, userLength}) {
  return (
    <div className='card'>
    <img src="img/final.png" alt="success" />   
    <center><h1>You added {(userLength < 2) ? `${userLength} person`: `${userLength} people`} : </h1></center>   
    {toAdd.map( user => <div key={user.id}><center><h3>{user.first_name} {user.last_name}</h3></center></div>)}
    <a href="/"><button>Back</button></a>
</div>
  )
}

export default Final