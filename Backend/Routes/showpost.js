const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../register_log/showpost');

router.get('/showblogs', async(req,res)=>{
    try{
     // console.log("line 9 in routes showpost")
      
      const result = await query.showblogpost();
      
      //console.log("RESULT") 
      
      res.json(result);
      
     
    
    }
    catch(err){
      console.log(err)
    }  
})
router.get('/showquestions', async(req,res)=>{
  try{
   // console.log("line 9 in routes showpost")
    
    const result = await query.showquestions();
    
    //console.log("RESULT") 
   // console.log(result)
    
    res.json(result);
    
   
  
  }
  catch(err){
    console.log(err)
  }  
})

router.post('/showcomments', async(req,res)=>{
  try{
    //console.log("line 45 in routes show comments ")
    //console.log(req.body) ; 
    const  { blogId } = req.body ; 
    const result = await query.showcomments(blogId) ; 
    //console.log("RESULT") 
    //console.log(result)
    
    res.json(result);
    
   
  
  }
  catch(err){
    console.log(err)
  }  
})


router.post('/showans', async(req,res)=>{
  try{
    //console.log("line 65 in routes show answers ")
    //console.log(req.body) ; 
    const  { Ques_id } = req.body ; 
    const result = await query.showanswers(Ques_id) ; 
    //console.log("RESULT in routes line 69 for ans") 
    //console.log(result)
    
    res.json(result);
    
   
  
  }
  catch(err){
    console.log(err)
  }  
})


router.post('/personalposts', async(req,res)=>{
  try{
    //console.log("line 85 in routes show personal posts ")
    //console.log(req.body) ; 
    const  { userID } = req.body ; 
    const result = await query.personalblog(userID) ; 
   // console.log("RESULT in routes line 89 for pblog") 
    //console.log(result)
    
    res.json(result);
    
   
  
  }
  catch(err){
    console.log(err)
  }  
})

router.post('/personalquestions', async(req,res)=>{
  try{
    //console.log("line 85 in routes show personal ques ")
    //console.log(req.body) ; 
    const  { userID } = req.body ; 
    const result = await query.personalQuestions(userID) ; 
    //console.log("RESULT in routes line 89 for pblog") 
    //console.log(result)
    
    res.json(result);
    
   
  
  }
  catch(err){
    console.log(err)
  }  
})


router.post('/personalquestions', async(req,res)=>{
  try{
    //console.log("line 85 in routes show personal ques ")
    //console.log(req.body) ; 
    const  { userID } = req.body ; 
    const result = await query.personalQuestions(userID) ; 
    //console.log("RESULT in routes line 89 for pblog") 
    //console.log(result)
    
    res.json(result);
    
   
  
  }
  catch(err){
    console.log(err)
  }  
})


router.post('/getsaved', async(req,res)=>{
  try{
    //console.log("line 85 in routes show personal ques ")
    //console.log(req.body) ; 
    const  { userID } = req.body ; 
    const result = await query.savedb(userID) ; 
    //console.log("RESULT in routes line 89 for pblog") 
    //console.log(result)
    
    res.json(result);
    
   
  
  }
  catch(err){
    console.log(err)
  }  
})

router.post('/saveblog' , async(req , res) =>
{
    try
    {
        console.log("in blog saving process") ; 
           
         const {USER_ID , BLOG_ID} = req.body ; 
         //console.log(req.body)
        const result = await query.saveblog(USER_ID , BLOG_ID ) 
        console.log(result);
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)


module.exports = router