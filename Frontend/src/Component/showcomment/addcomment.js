import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
//import NavBar from '../NavBar/NavBar';
import './addcomment.css'

const AddComment = ({blog_id}) => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [addcomment , setAddComment] = useState([]) ; 
    let navigate = useNavigate() ; 
    let location = useLocation() ; 

    useEffect(
()=>
{
    const x = {...addcomment}
    x['USER_ID'] = loggedInUser?.ID ; 
    let dateString = Date();
   // newly_added_post['TIME'] = new Date(dateString).toISOString()
   x['TIME'] = dateString.toLocaleString() ;
   x['BLOG_ID'] = blog_id ; 
  
    //console.log("IN USE-EFFECT")
    
    setAddComment(x)
    //console.log(addcomment)
   
} , []


    )


    const handleChange = (event)=>
    {
       
        console.log(event.target.name , event.target.value) ; 
        const x={...addcomment}
        x[event.target.name] = event.target.value ; 
        setAddComment(x)
        console.log("handle change")
        console.log(addcomment)


    }

    
    const handleSubmit= (event)=>
    {
        event.preventDefault();
        console.log(addcomment) ; 
        try {
            console.log("sending to add answer from backend") ;
            fetch('http://localhost:3000/addblog/addcom', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addcomment)
            })
            .then((res)=>{
                res.json()
               
            })
            .then(data=>{
                console.log('showing data in addcomment frontend')
                console.log(data)
                
               // navigate(location?.state?.from || '/showblogs', {replace:true})
               window.location.reload(false);
             
            })
        } catch (error) {
            console.log(error);
        }
        //window.location.reload(false); //auto refresh , but not updatng the data
         
    }



    return (
        <div>
            
            <div id='addComment-container'>
                <br></br>
                <h3 style={{margin:"20px"}}>Add a Comment</h3>
                <div className='addc-form'>
                    
                        <form action="" className='addC-fm'>
    
                            <textarea name="COMMENTS" id="area" cols="100" rows="5" onChange={handleChange} required></textarea>
                           
                            <input type="submit" value="Submit" id='sbcm' onClick={handleSubmit} />
                        </form>
                 
                </div>
                <div>
                    <div></div>
                    
                  
                </div>
            </div>
        </div>
    );
};

export default AddComment;