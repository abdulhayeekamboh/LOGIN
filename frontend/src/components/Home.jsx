import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const Navigate = useNavigate();

    const [name, setname] = useState('');
    useEffect(()=>{
        if (!localStorage.getItem('auth_token')){
           return Navigate('/res');
        }else {
            setname(localStorage.getItem('userName'));
        }
    },[])

  return (
    <div className="page">
        <h1>Wel Come{name}</h1>
    </div>
  )
}

export default Home