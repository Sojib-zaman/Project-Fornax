const express = require('express') 
const router = express.Router({mergeParams:true}) 
const query = require('../register_log/create') ;  


router.post('/createUserByAdmin' , async(req , res) =>
{
    try
    {
        console.log("in member signup by admin") ; 
       
        const { NAME , EMAIL , COUNTRY , PASSWORD , IMAGE , ADMIN } = req.body ; 
         console.log(NAME , EMAIL , COUNTRY , PASSWORD, IMAGE, ADMIN  )
        const result = await query.createAdmin( NAME , PASSWORD , COUNTRY , EMAIL, IMAGE , ADMIN   ) 
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

router.post('/getuser' , async(req , res) =>
{
    try
    {
        console.log("in admin get user by admin") ; 
       console.log(req.body);
        const {NAME} = req.body ; 
         
        const result = await query.getuserbyname( NAME  ) 
        console.log("result in admin get user")
        console.log(result);
       
         
    res.json(result);
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)


router.post('/updatebyAdmin' , async(req , res) =>
{
    try
    {
        console.log("making him admin") ; 
       console.log(req.body);
        const {ID} = req.body ; 
         
        const result = await query.makeadmin( ID  ) 
       
       
         
    res.end();
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)


module.exports = router ; 