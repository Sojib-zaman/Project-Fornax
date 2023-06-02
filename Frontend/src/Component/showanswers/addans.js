import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
//import NavBar from '../NavBar/NavBar';
import './addans.css'
import Header2 from '../header2';
import Footer from '../Footer/Footer';

const AddAns = ({Ques_id}) => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [addans , setaddans] = useState([]) ; 
    let navigate = useNavigate() ; 
    let location = useLocation() ; 

    useEffect(
()=>
{
    const x = {...addans}
    x['USER_ID'] = loggedInUser?.ID ; 
    let dateString = Date();
   // newly_added_post['TIME'] = new Date(dateString).toISOString()
   x['TIME'] = dateString.toLocaleString() ;
   x['QUESTION_ID'] = Ques_id ; 
  
    console.log("IN USE-EFFECT")
    
    setaddans(x)
    console.log(addans)
   
} , []


    )


    const handleChange = (event)=>
    {
        console.log(event.target.name , event.target.value) ; 
        const x={...addans}
        x[event.target.name] = event.target.value ; 
        setaddans(x)
        console.log("handle change")
        console.log(addans)

       


    }

    
    const handleSubmit= (event)=>
    {
        event.preventDefault();
        console.log(addans) ; 
        try {
            console.log("sending to add answer from backend") ;
            fetch('http://localhost:3000/addques/addsolve', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addans)
            })
            .then((res)=>{
                res.json()
               
            })
            .then(data=>{
                console.log('showing data in addans frontend')
                console.log(data)
                window.location.reload(false);
               // navigate(location?.state?.from || '/showquestions', {replace:true})
             
            })
        } catch (error) {
            console.log(error);
        }
         
        
    }




    return (
        <div>
            
            
            <div id='addAns-container'>
                <br></br>
                <h3 style={{margin:"20px"}}>Add an Answer</h3>
                <div className='addc-form'>
                        
                <form action="" className='addC-fm'>
    
                            
                            
                           
                            <textarea name="ANS_CONTENT" id="area" cols="100" rows="5" placeholder='Add answer' onChange={handleChange} required></textarea>
                            <br></br><br></br>
                            <input type="submit" value="Submit" className='createpostBtn' onClick={handleSubmit} />
                            </form>
                 
                 </div>
                 <div>
                     <div></div>
                     
                   
                 </div>
             </div>
         </div>

    );
};

export default AddAns;