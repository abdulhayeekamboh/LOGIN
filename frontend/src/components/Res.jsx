import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Res = () => {
    const Navigate = useNavigate();
    const [page, setpage] = useState(false);

    useEffect(() => {

        if (!localStorage.getItem('hi')){
            setpage(true);
            setTimeout(() => {
                Navigate('/register')
            }, 3000);
        }else {
            setpage(false);
            setTimeout(() => {
            localStorage.removeItem('hi');
                Navigate('/login');
            }, 5000);
        }


        
    }, [])
    

  return (
    <div className="page">
        { page === true ? (
    <div>YOU CAN'T ACCES WIHTOUT AN ACCOUNT</div>
) : (
    <h3>your account created now we are redirecting you to login please login Now</h3>
)}
    </div>
  )
}

export default Res