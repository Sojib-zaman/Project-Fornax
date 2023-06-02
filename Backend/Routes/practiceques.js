const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../register_log/problemquery');

router.post('/newpracticeques' , async(req,res)=>

{
    try
    {

    }catch(error)
    {
        console.log(error) ; 
    }
}



)
router.get('/practiceques' , async(req , res )=>
{
    console.log("here")
    try 
    {
        const result = await query.getques() ; 
        res.json(result) ; 
    }
    catch(error)
    {
        console.log(error) ; 
    }
})

router.get('/problem/:ID' , async(req , res )=>
{
    
    try 
    {
        const ID =  await req.params.ID ; 
        console.log("ID:")
        console.log(ID) ; 
        const result = await query.getSpecificQues(ID) ;
        console.log(result) 
        res.json(result) ; 
    }
    catch(error)
    {
        console.log(error) ; 
    }
})
module.exports = router ; 