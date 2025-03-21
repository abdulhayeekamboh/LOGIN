import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [rich, setrich] = useState('');
    const [type, settype] = useState('');


    async function submit(e) {
        e.preventDefault();
        var p = document.querySelector('p');
        p.style.display = 'block';
        try {
            const response = await axios.post('https://login-gamma-three.vercel.app/api/login',{email,password});
            console.log(response.data);
            setrich(response.data.message);
            settype(response.data.type);
            localStorage.setItem('auth_token',response.data.msg.token);
            localStorage.setItem('userName',response.data.msg.name);
            setTimeout(() => {
                Navigate('/');
            }, 1200);
        }catch(e){
            console.log(e);
            settype('error');
        }
        
    }

  return (
    <div className="page">
        <div className="container">
            <form onSubmit={submit}>
                <h1>Login kro</h1>
                <input type='email'
                placeholder='Email'
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value);
                }}
                    required
                />
                <input type='password' 
                placeholder='Password'
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value);
                }}
                    required
                />
                 <p className={type === 'success' ? 'success' : 'error'}>{rich}</p>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
