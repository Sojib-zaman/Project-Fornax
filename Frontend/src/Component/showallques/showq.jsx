import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Header2 from '../header2';
import Questionlist from './queslist';
//import NavBar from '../NavBar/NavBar';
import './showq.css'


const Showq = ()=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ADMIN,setadmin] = useState(null);
    const [ques,setques] = useState(null);
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 

   

    useEffect(()=>
    {
        if(loggedInUser.ADMIN==1)
    {
        setadmin(true);
    }
        let url = 'http://localhost:3000/showpost/showquestions' ;
        
            try
            {
                fetch(url) 
         .then(res => 
            {
                return res.json()
            }
            ) 
            .then(
                (data)=>
                {
                    setques(data)
                    //console.log(data)
                   
                }

                
            ).catch(err => 
            {
                console.log(err.message) ; 
            })
        
            }
            catch
            {
                console.log("eroro")
            }
         
            
       





      
        
    },[])
return (
    <div>
        
        <div className="profile-container" id="qcontainer">
           <Header2></Header2>
            
        <div className="profile-right">
            <div></div>
                <div className="top-header">
                    <h1>QUESTIONS ASKED BY USERS</h1>
                </div>
        </div>
               
                    
                
               
                    { ques && < Questionlist Questionlist={ques} title="All Questions asked by users" Admin={ADMIN}/>
                    } 
                    
                    
                   
                
           </div>
            

    </div>
        );
    };
    
    export default Showq;