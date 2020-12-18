import React, {useEffect, useState} from 'react'

function LoginComponent() {

  const BASE_URL = 'http://localhost:4000/';

  const [data, setData] = useState({
    username: 'antman6',
    password: '123456789',
    gamesWishList: ['kebab', 'hejsan', 'pizza']
  });

  useEffect(() => {
    
    fetch(BASE_URL + 'user')
      .then(response => response.json())
      .then(data => console.log(data))
  },[])

  async function createNewUser() {
    fetch(BASE_URL + 'user', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }
  createNewUser()
  return (
    <div>
      
    </div>
  )
}

export default LoginComponent
