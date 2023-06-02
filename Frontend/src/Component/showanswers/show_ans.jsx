import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Answerlist from './answerlist';
//import NavBar from '../NavBar/NavBar';
import './show_ans.css'

//HERE 
const ShowAnswer = ({Ques_id})=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [answers,setAnswer] = useState([]);
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const [Quesinfo,setQuesInfo] = useState({})

    

    useEffect(()=>
    {
        const getdata = async()=>
        {
            try {
                //console.log('in try') ; 
                
                Quesinfo['Ques_id'] = Ques_id;

                //console.log(bloginfo)

                const res = await fetch('http://localhost:3000/showpost/showans', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Quesinfo)
                     
                })
                
                const data = await res.json()  
                //console.log("here data")
                //console.log(data)
                if(data.length === 0){
                
                }
                else{
                    //console.log(data[0]) ; 
                    setAnswer(data);
                    //console.log(data);
                    
                    
                    
                }
       
            } catch (error) {
                console.log(error);
            }
        }
        
        getdata() ; 
       
      
        
    } , [])
return (
    <div>
         <div id="Answer-container">
            
            
            <div className="Answer-header">
                <h1 style={{backgroundColor: "aquamarine", height: "20px",padding: "5px"}}>Answers</h1> 
           
            
                
                    { answers && < Answerlist answer={answers}/>
                    } 
                    
                    </div>
            <div>
            </div>
        </div>
    
    </div>
        );
    };
    
    export default ShowAnswer;