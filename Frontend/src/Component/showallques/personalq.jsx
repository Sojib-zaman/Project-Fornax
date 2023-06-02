import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import PersonalQuesList from './personalques';
//import NavBar from '../NavBar/NavBar';
import './personal.css'


const ShowPersonalQues = ({DEF})=> 
{
    console.log(DEF);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ Questions,setQuestions] = useState(null);
    let title = '' ; 

    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const[userinfo , setuserinfo] = useState({})
    let a =0;
    if(DEF==0)
        {
             a = loggedInUser.ID ; 
             title="My Questions"
            
        }
    else { a=DEF ; title="User's Questions" }

    useEffect( ()=>
    {
        const need = async()=>
        {
           
            try {
        
                   userinfo['userID'] = a ; 
                const res = await fetch('http://localhost:3000/showpost/personalquestions',  {
                    method: 'POST',
                  
                    
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userinfo)
                     
                } )
                
                const data = await res.json()  
                
                console.log(data)
                if(data.length === 0){
                
                }
                else{
                    //console.log(data[0]) ; 
                    setQuestions(data)
                    //console.log(data);
                    
                    
                    
                }
        
            } catch (error) {
                console.log(error);
            }
        }

        need() ;
        
        
    },[])
return (
    <div>
        <div className="profile-container">
            <div className="profile-left">
            </div>
            <div className="profile-right">
                <div className="profile-right-header">
                    <h1>ASKED QUESTIONS</h1>
                </div>
                <div className="profile-info">
                    
              
                
                    { 
                    
                         Questions && < PersonalQuesList questions={Questions} title={title}/>
                    
                   
                    } 

                    
                    
                    
                    <div>
                        
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    
    </div>
        );
    };
    
    export default ShowPersonalQues;