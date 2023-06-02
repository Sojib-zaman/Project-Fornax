const express  = require('express') ; 
const router = express.Router({mergeParams:true})
const handle = require('../sql') 
const member = require('./member') 
const addblog = require('./addblog')
const askques = require('./addques');
const showpost = require('./showpost') ; 
const practice = require('./practiceques')
const procedures = require('./proc');


//const answer = require('./answer') 
router.use('/member' , member) ; 
router.use('/addblog' , addblog) ;
router.use('/addques',askques) 
router.use('/showpost', showpost) ; 
router.use('/practiceques' , practice) ; 
router.use('/proc' , procedures) ;


//router.use('/answer' , answer) ; 
module.exports = router 