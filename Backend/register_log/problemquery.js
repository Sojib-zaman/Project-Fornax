const con = require('../Connection') ; 

const handle={}
handle.getques = async()=>
{
    const query = `SELECT * FROM C##PROJECT.PRACTICE `
    

    const binds = {}

    const result = (await con.execute(query , binds , con.options))
    return result.rows ; 
}

handle.getSpecificQues = async(ID) =>
{
    const query = `SELECT * FROM C##PROJECT.PRACTICE WHERE ID = :ID `
    

    const binds = {ID : ID}

    const result = (await con.execute(query , binds , con.options))
    return result ; 
}
module.exports = handle  ;