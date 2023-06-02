const { DATE } = require('oracledb');
const con = require('../Connection') ; 

const handle = {} 

// add the type as a dropdown option maybe 
//hardcode admin for it 

handle.showblogpost = async(req , res , next) => 
{
    
    //console.log("in register log showpost") 
    const query = `
    SELECT U.NAME , P.ID , U.ID , P.BLOG_TITLE , P.BLOG_CONTENT , to_char(P.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , P.CATEGORY , P.UPVOTES FROM BLOG P JOIN APP_USER U ON P.USER_ID = U.ID  ORDER BY TIME DESC`
    const binds={}
    const result = (await con.execute(query , binds , con.options))
    return result ; 
}



handle.showquestions = async(req , res , next) => 
{
    
   // console.log("in register log showpost QUESTIONS ") 
    const query = `
    SELECT U.NAME , Q.ID ,U.ID, Q.QUES_CONTENT , to_char(Q.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , Q.CATEGORY FROM QUESTIONS Q JOIN APP_USER U ON Q.USER_ID = U.ID  ORDER BY TIME DESC`
    const binds={}
    const result = (await con.execute(query , binds , con.options))
    //console.log(result) ; 
    return result ; 
}

handle.showcomments = async(blogId ) => 
{
    
    
   // console.log("in register log showpost Comments ") 
   // console.log(blogId) ;
    const query = `
    SELECT U.NAME , C.BLOG_ID, C.ID , C.COMMENTS , to_char(C.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME FROM COMMENTS C JOIN APP_USER U ON C.USER_ID = U.ID WHERE C.BLOG_ID = :blogId  ORDER BY TIME DESC`
    const binds={blogId : blogId}
    const result = (await con.execute(query , binds , con.options))
   // console.log('44 result')
   // console.log(result) ; 
    return result.rows ; 
}

handle.showanswers = async(Ques_id ) => 
{
    
    
   // console.log("in register log showpost show answers ") 
    //console.log(Ques_id) ;

    //correct query later 
    const query = `
    SELECT U.NAME , A.QUESTION_ID , A.ID , A.ANS_CONTENT , to_char(A.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME FROM ANSWERS A JOIN APP_USER U ON A.USER_ID = U.ID WHERE A.QUESTION_ID = :Ques_id  ORDER BY TIME DESC`
    const binds={Ques_id : Ques_id}
    const result = (await con.execute(query , binds , con.options))
   // console.log('61 result in main query register')
    //console.log(result) ; 
    return result.rows ; 
}

handle.personalblog = async(userID ) => 
{
    
    
   // console.log("in register log showpost show pblogs ") 
   // console.log(userID) ;

    //correct query later 
    const query = `
    SELECT  P.ID , P.BLOG_TITLE , P.BLOG_CONTENT , to_char(P.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME FROM BLOG P JOIN APP_USER U ON P.USER_ID = U.ID WHERE P.USER_ID = :userID  ORDER BY TIME DESC`
    const binds={userID : userID}
    const result = (await con.execute(query , binds , con.options))
    //console.log('78 result in main query register')
    //console.log(result.rows) ; 
    return result.rows ; 
}



handle.personalQuestions= async(userID ) => 
{
    
    
   // console.log("in register log showpost show pblogs ") 
   // console.log(userID) ;

    //correct query later 
    const query = `
    SELECT  P.ID , P.QUES_CONTENT , to_char(P.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME FROM QUESTIONS P JOIN APP_USER U ON P.USER_ID = U.ID WHERE P.USER_ID = :userID  ORDER BY TIME DESC`
    const binds={userID : userID}
    const result = (await con.execute(query , binds , con.options))
    //console.log('78 result in main query register')
    //console.log(result.rows) ; 
    return result.rows ; 
}
handle.savedb= async(userID ) => 
{
    
    
   // console.log("in register log showpost show pblogs ") 
   // console.log(userID) ;

    //correct query later 
    const query = `
    SELECT  B.ID , B.BLOG_TITLE ,B.BLOG_CONTENT, to_char(B.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME FROM BLOG B JOIN SAVED_POST P ON P.BLOG_ID = B.ID WHERE P.USER_ID = :userID  ORDER BY TIME DESC`
    const binds={userID : userID}
    const result = (await con.execute(query , binds , con.options))
    //console.log('78 result in main query register')
    //console.log(result.rows) ; 
    return result.rows ; 
}

handle.upvoteblog = async(BLOG_ID) => 
{
    
    console.log("in register log upvote ") 
    console.log(BLOG_ID)
    const query = `
    BEGIN
     INC_UPVOTES(:BLOG_ID) ; 
    END;
    
    `
    
    const binds={BLOG_ID}
    const result = (await con.execute(query , binds , con.options))
    return result ; 
}



handle.subcount = async(ID) => 
{
    
    //console.log("in register log subcount ") 
    //console.log(ID)
    const query = `
    BEGIN
     INC_SUB(:ID) ; 
    END;
    
    `
    
    const binds={ID}
    const result = (await con.execute(query , binds , con.options))
    return result ; 
}
handle.AcCount = async(ID) => 
{
    
    //console.log("in register log AC count ") 
    //console.log(ID)
    const query = `
    BEGIN
     INC_ACPT(:ID) ; 
    END;
    
    `
    
    const binds={ID}
    const result = (await con.execute(query , binds , con.options))
    return result ; 
}

handle.SendFollowNotification = async(FOLLOWEE_ID , FOLLOWER_ID) => 
{
    
    //console.log("in register log AC count ") 
    //console.log(ID)
    const query = `
    BEGIN
     SEND_NOTIFICATION(:FOLLOWEE_ID , :FOLLOWER_ID) ; 
    END;
    
    `
    
    const binds={FOLLOWEE_ID , FOLLOWER_ID}
    const result = (await con.execute(query , binds , con.options))
    return result ; 
}

handle.SendUpvoteNotification = async(BLOG_ID, USER_ID) => 
{
   
   
    const query = `
    BEGIN
     UP_NOTI(:BLOG_ID, :USER_ID);
    END;
    
    `
    
    const binds={BLOG_ID, USER_ID}
    const result = (await con.execute(query , binds , con.options))
    return result ; 
}




handle.saveblog = async(USER_ID , BLOG_ID) => 
{
    
    console.log("in register log save blog ") 
    console.log(USER_ID , BLOG_ID)
    const query = `
    INSERT INTO C##PROJECT.SAVED_POST (USER_ID , BLOG_ID)
    VALUES (:USER_ID ,:BLOG_ID)
    `
    
    const binds={USER_ID , BLOG_ID}
    const result = (await con.execute(query , binds , con.options))
    return result ; 
}




module.exports = handle ;
