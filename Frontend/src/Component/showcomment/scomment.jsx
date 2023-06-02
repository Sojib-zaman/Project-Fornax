import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Commentlist from './commentlist';
//import NavBar from '../NavBar/NavBar';
import './scomment.css'

//HERE 
const ShowComments = ({blog_name})=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [comments,setComments] = useState([]);
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const [bloginfo,setBlogInfo] = useState({})

    

    useEffect(()=>
    {
        const getdata = async()=>
        {
            try {
                //console.log('in try') ; 
                
                bloginfo['blogId'] = blog_name;

                //console.log(bloginfo)

                const res = await fetch('http://localhost:3000/showpost/showcomments', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bloginfo)
                     
                })
                
                const data = await res.json()  
                //console.log("here data")
                //console.log(data)
                if(data.length === 0){
                
                }
                else{
                    //console.log(data[0]) ; 
                    setComments(data);
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
        <div className="comment-container">
            
            
                <div className="comment-header">
                    <h1 style={{backgroundColor: "aquamarine", height: "20px",padding: "5px"}}>COMMENTS</h1> 
               
                
                
                    { comments && < Commentlist comment={comments} title=""/>
                    } 
                    
                    
                 
            </div>
            <div>
            </div>
        </div>
    
    </div>
        );
    };
    
    export default ShowComments;