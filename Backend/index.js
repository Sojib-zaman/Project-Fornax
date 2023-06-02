const port = 3000 ; 

const app = require('./app') ;
const connection = require('./Connection') ; 

app.listen(port, async()=>
{
    try
    {
        await connection.startup() ; 
        console.log("listening to port 3000");
    }
    catch(err)
    {
        console.log(err)  ; 
    }
}

)