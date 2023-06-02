
const con = require('../Connection') ; 

const handle = {} 

// add the type as a dropdown option maybe 
//hardcode admin for it 
handle.createAdmin = async(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ADMIN  ) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE, ADMIN   ) 
    
    const query = `INSERT INTO C##PROJECT.APP_USER (NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , Admin)
    VALUES (:NAME ,  :PASSWORD ,  :COUNTRY , :EMAIL , :IMAGE, :ADMIN   )
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ADMIN}

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}



handle.makeadmin = async(ID) => 
{
    console.log(ID) 
    
    const query = `UPDATE APP_USER
    SET ADMIN=1
    WHERE ID = :ID
    `

    const binds = {ID}

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}


handle.create = async(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) 
    
    const query = `INSERT INTO C##PROJECT.APP_USER (NAME , PASSWORD , COUNTRY , EMAIL , IMAGE )
    VALUES (:NAME ,  :PASSWORD ,  :COUNTRY , :EMAIL , :IMAGE )
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE }

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}

handle.verify = async(email , password)=>
{
    const query = `SELECT * FROM C##PROJECT.APP_USER WHERE EMAIL =:email AND PASSWORD =:password`
    //console.log("here in create verify")
    //console.log(email , password)  ; 
    const binds = {email : email , password: password } 
    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ; 
    return result ; 
}

handle.isdel = async(email)=>
{
    
//     const query = `
//    SELECT * FROM IS_DELETED(:email)
 
//     `

 const query=`SELECT * FROM DELETED_USER WHERE EMAIL=:email`
    console.log("here in isdel")
    console.log(email)  ; 
    const binds = {email} 
    const result = (await con.execute(query , binds , con.options))
    console.log(result) ; 
    return result ; 
}

handle.getuserbyname = async(NAME)=>
{
    const query = `SELECT * FROM C##PROJECT.APP_USER WHERE NAME = :NAME `
 
    const binds = {NAME:NAME } 
    
    const result = (await con.execute(query , binds , con.options)).rows
   console.log("in create");
    console.log(result) ; 
    return result; 
}


handle.getuser = async(ID)=>
{
    const query = `SELECT * FROM C##PROJECT.APP_USER WHERE ID = :ID `
    console.log("here in create GETUSER")
    console.log(ID)  ; 
    const binds = {ID:ID } 
    const result = (await con.execute(query , binds , con.options)).rows
    console.log(result) ; 
    return result ; 
}

handle.update = async(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID ) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE, ID  ) 
   
    const query = ` UPDATE APP_USER
    SET NAME = :NAME , PASSWORD= :PASSWORD , EMAIL = :EMAIL , IMAGE= :IMAGE , COUNTRY = :COUNTRY 
    WHERE ID = :ID
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID  }

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}


handle.delete = async(ID,EMAIL ) => 
{
    console.log(ID,EMAIL) 
    const bindsx = {ID}
    let queryx = ` 
    DELETE  FROM SAVED_POST 
    WHERE USER_ID = :ID 
    `
    let resultx= (await con.execute(queryx , bindsx , con.options))
    queryx = ` 
    DELETE  FROM COMMENTS 
    WHERE USER_ID = :ID 
    `
    resultx= (await con.execute(queryx , bindsx , con.options))
    queryx = ` 
    DELETE  FROM BLOG 
    WHERE USER_ID = :ID 
    `
    resultx= (await con.execute(queryx , bindsx , con.options))





    const bindsy = {ID}
   
    let queryy = ` 
    DELETE FROM ANSWERS 
    WHERE USER_ID = :ID
    `
    let resulty= (await con.execute(queryy , bindsy , con.options))
    queryy = ` 
    DELETE FROM QUESTIONS 
    WHERE USER_ID = :ID
    `
     resulty= (await con.execute(queryy , bindsy , con.options))


    

    const query = `  DELETE FROM APP_USER 
    WHERE ID = :ID
   
    `

    const binds = {ID}

    const result = (await con.execute(query , binds , con.options))
  
    console.log("in qy2222")


    const query2 = `    INSERT INTO C##PROJECT.DELETED_USER(EMAIL) VALUES(:EMAIL)
    `

    const binds2 = {EMAIL}

    const result2= (await con.execute(query2 , binds2, con.options))

    console.log(result) ;

    return result ; 
}



handle.deleteQuestion = async(ID ) => 
{
    console.log(ID) 
   
    const query = ` 
    DELETE FROM ANSWERS
    WHERE QUES_ID = :ID 
   
    `

    const binds = {ID}

    const result = (await con.execute(query , binds , con.options))
  
    const query2 = `   DELETE FROM QUESTIONS
    WHERE ID = :ID 
    `

    const binds2 = {ID}

    const result2= (await con.execute(query2 , binds2, con.options))

    console.log(result) ;

    return result ; 
}


handle.getnotif = async(ID ) => 
{
    console.log("in get notification")
    console.log(ID  ) 
    
    const query = `
   SELECT * FROM C##PROJECT.NOTIFICATIONS WHERE USER_ID = :ID 
    `

    const binds = {ID}

    const result = (await con.execute(query , binds , con.options)).rows
    console.log(result) ;

    return result ; 
}


module.exports = handle ; 