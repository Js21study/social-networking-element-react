
import { useEffect, useState } from 'react';
import './App.css';
import Final from './components/Final';
import Users from './components/Users';

function App() {
  const [dataUsers, setDataUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [toAdd, setToAdd] = useState([3, 1])


  const onClickToAdd = (id) => {
    if(toAdd.includes(id)){
      setToAdd((prev) => prev.filter((_id) => _id !== id))

    } else {
      setToAdd((prev) => [...prev, id])

    }

  }

  useEffect(() => {
    setIsLoading(true)
    fetch('https://reqres.in/api/users?page=2')
    .then( (res) => res.json())
    .then( (json) => {
      setDataUsers(json.data)
      setIsLoading(false)
    })
    .catch( err => { 
      console.warn(err)
      alert('There is error with getting users. Please, try again!')
    })
  }, [])

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  
  return (
    <div className="wrapper">
      <Users toAdd={toAdd} onClickToAdd={onClickToAdd} onChangeSearchValue={onChangeSearchValue} searchValue={searchValue} dataUsers={dataUsers} isLoading={isLoading}/>
      {/* <Final/> */}
    
    </div>
  );
}

export default App;
