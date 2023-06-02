const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../register_log/makepost');

router.post('/ques', async(req,res)=>{
    try{
      console.log("line 9")
      console.log(req.body);
      const {USER_ID , TIME , QUES_CONTENT , CATEGORY} = req.body ; 
      console.log(USER_ID , TIME ,  QUES_CONTENT , CATEGORY);


      const UPVOTES = Math.floor((Math.random() * 1000) + 1);
      
         let result = await query.addnewques(USER_ID , TIME ,  QUES_CONTENT, UPVOTES , CATEGORY) ; 
      
        
      res.end();
    
    }
    catch(err){
      console.log(err)
    }  
})




router.post('/addsolve', async(req,res)=>{
  try{
    console.log("in add solve , add ques line 29")
    console.log(req.body);
    const {USER_ID , TIME ,QUESTION_ID, ANS_CONTENT} = req.body ; 
    console.log(USER_ID , TIME ,QUESTION_ID, ANS_CONTENT);
    const SUPPORT = Math.floor((Math.random() * 1000) + 1);
    //const T = SYSDATE()
    const result = await query.addans(USER_ID , TIME ,QUESTION_ID, ANS_CONTENT,SUPPORT) ;
    console.log("in line 36 add ques")
    console.log(result) ; 
    res.end();
  
  }
  catch(err){
    console.log(err)
  }  
})





module.exports = router