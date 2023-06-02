import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import PersonalBlogList from './showpersonal';
//import NavBar from '../NavBar/NavBar';
import './personal.css'


const ShowSaved = ()=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [blogs,setPosts] = useState(null);
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const[userinfo , setuserinfo] = useState({})

  const a = loggedInUser.ID ; 

    useEffect( ()=>
    {
        const need = async()=>
        {
            console.log("try strart")
            try {
        
                   userinfo['userID'] = a ; 
                    const res = await fetch('http://localhost:3000/showpost/getsaved',  {
                    method: 'POST',
                  
                    
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userinfo)
                     
                } )
                
                const data = await res.json()  
                console.log("here data")
                console.log(data)
                if(data.length === 0){
                
                }
                else{
                    //console.log(data[0]) ; 
                    setPosts(data)
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
                    <h1>BLOG POSTS</h1>
                </div>
                <div className="profile-info">
                    
                
                
                    { blogs && < PersonalBlogList blogs={blogs} title="My blogs"/>
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
    
    export default ShowSaved;