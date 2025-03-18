const express = require('express');
const mysql = require('mysql2');
const port= 5000;
const cors =require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const secret_key = "HELLO@123450";
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'registration_db'
});

db.connect((e)=>{
    if (e){
        return console.log('database could not be connected');
    } console.log('database connected');
});

app.post('/api/register',(req,res)=>{
    const {name,email,password} = req.body;
    const newQuery = "SELECT * FROM work WHERE email = ?";
    db.query(newQuery,[email],(e,result)=>{
        if (e){
            return res.json({type:'error',message:'error while checking email'});
        } if (result.length !== 0){
            return res.json({type:'error',message:'email already exist'});
        } const query = "INSERT INTO work(name,email,password) values(?,?,?)";
        db.query(query,[name,email,password],(e,result)=>{
            if (e){
                return res.json({type:'error',message:'error while inserting data'});
            } res.json({type:'success',message:'Registration succesfully done'});
        })
    })
})

app.post('/api/login',(req,res)=>{
    const {email,password}= req.body;
    const query = "Select * from work where email = ?";
    db.query(query,[email],(e,result)=>{
        if (e){
            return res.json({type:'error',message:'error while checking the email'});
        } if (result.length === 0){
            return res.json({type:'error',message:'Email invalid'});
        } if (password === result[0].password){
            const token = jwt.sign(
                {id:result.insertId, email:result[0].email},
                secret_key,
                {expiresIn:'1h'}
            )
            const msg = {
                token:token,
                name:result[0].name,
                email:result[0].email
            }
            res.json({type:'success',message:'Login succesfully done',msg});

        } else {
            res.json({type:'error',message:'Invalid password'})
        }
    })
    
})


app.listen(port,()=>{
    console.log(`the server is started as http://localhost:${port}`);
})