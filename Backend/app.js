const express = require('express') ;
const app = express() ; 


const cors = require('cors') ; 

app.use(express.json());
app.use(cors()) ;


const user = require('./Routes/user'); 
app.use('/' , user)  ; 

const admin = require('./Routes/Admin')
app.use('/admin' , admin) ; 




module.exports = app ; 