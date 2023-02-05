
import { useEffect, useState } from 'react';
import './App.css';
import Final from './components/Final';
import Users from './components/Users';

function App() {
  const [dataUsers, setDataUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)


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
  
  return (
    <div className="wrapper">
      <Users dataUsers={dataUsers} isLoading={isLoading}/>
      {/* <Final/> */}
    
    </div>
  );
}

export default App;
