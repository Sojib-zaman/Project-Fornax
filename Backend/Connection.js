const db = require('oracledb') ; 
db.autoCommit = true ;

const func = {}

func.options = 
{
    outFormat : db.OUT_FORMAT_OBJECT 
}
func.startup = async() =>
{
    console.log("DB CONNECTION START") ; 
    await db.createPool(
        {
            user : 'c##PROJECT' ,
            password: 'fornax' , 
            connectionString: 'localhost/orcl' ,
            poolMin : 4 , 
            poolMax : 10 , 
            poolIncrement : 1
        }


    ) ; 
    console.log("POOL CREATED") ; 
}
func.execute = async (query , binds , options)=>
{
    let result ; 
    let connection  ; 
    try{
        connection = await db.getConnection() ; 
        result = await connection.execute(query , binds , options) ; 
    }
    catch(err)
    {
        console.log(err.message) ; 
    }
    finally
    {
        if(connection)
        {
            try
            {
                await connection.close();
            }
            catch(err)
            {
                console.log(err) ; 
            }
        }
    }
    return result ; 
}
module.exports = func  ;