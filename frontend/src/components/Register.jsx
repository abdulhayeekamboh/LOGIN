import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const Navigate = useNavigate();

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [rich, setrich] = useState('');
    const [type, settype] = useState('');

    async function submit(e) {
        e.preventDefault();
        var p = document.querySelector('p');
        p.style.display = 'block';
        try{
            const response = await axios.post('http://localhost:5000/api/register',{
                name,
                email,
                password
            });
            setrich(response.data.message);
            settype(response.data.type);
            if (response.data.message === 'Registration succesfully done'){
                const hi = 'account is not available';
                localStorage.setItem('hi',hi)
                setTimeout(() => {
                    Navigate('/res');
                }, 1200);
            }
        }catch(e){
            if (e){
                console.log(e);
            }
        }
    }

  return (
    <div className="page">
        <div className="container">
            <form onSubmit={submit}>
                <h1>Register kro</h1>
                <input type="text" 
                placeholder='Name'
                value={name}
                onChange={(e)=>{
                    setname(e.target.value)
                }}
                />
                <input type='email'
                placeholder='Email'
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value);
                }}
                />
                <input type="text"
                placeholder='Password'
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value);
                }}
                />
                <p className={type === 'success' ? 'success':'error'}>{rich}</p>
                <button type='submit'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register