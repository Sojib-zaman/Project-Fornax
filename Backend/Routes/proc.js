const express = require('express') 
const router = express.Router({mergeParams:true}) 
const query = require('../register_log/showpost') ; 
router.post('/blgupvotes' , async(req , res) =>
{
    try
    {
        console.log("in blog upvotes") ; 
           
         const {BLOG_ID} = req.body ; 
         console.log(req.body)
        const result = await query.upvoteblog(BLOG_ID ) 
        console.log(result);
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

router.post('/upnoti' , async(req , res) =>
{
    try
    {
        console.log("in blog upvotes notification") ; 
           
         const {BLOG_ID , USER_ID} = req.body ; 
         console.log(req.body)
        const result = await query.SendUpvoteNotification(BLOG_ID, USER_ID ) 
        console.log(result);
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)





router.post('/subcount' , async(req , res) =>
{
    try
    {
       // console.log("in practice subcount") ; 
          // console.log(req.body)
        const {ID} = req.body ; 
        
        //console.log(ID)
        const result = await query.subcount(ID) 
        console.log(result);
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)


router.post('/account' , async(req , res) =>
{
    try
    {
        //console.log("in practice AC count") ; 
           //console.log(req.body)
        const {ID} = req.body ; 
        
        //console.log(ID)
        const result = await query.AcCount(ID) 
        console.log(result);
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)


router.post('/notifyfollow' , async(req , res) =>
{
    try
    {
        //console.log("in practice AC count") ; 
           //console.log(req.body)
        const {FOLLOWEE_ID , FOLLOWER_ID} = req.body ; 
        
        //console.log(ID)
        const result = await query.SendFollowNotification(FOLLOWEE_ID , FOLLOWER_ID) 
        console.log(result);
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)



module.exports = router  ; 