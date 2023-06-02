import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

//import NavBar from '../NavBar/NavBar';


//HERE 
const Savedpost = ({BLOG_ID})=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const [bloginfo,setBlogInfo] = useState({})
    console.log(BLOG_ID)



    const demo = async () => 
    {
    console.log("in demo")
    
    const x = {...bloginfo} ; 
    x['BLOG_ID'] = BLOG_ID ; 
    x['USER_ID'] = loggedInUser.ID ; 
    setBlogInfo(x) ;  
    
    console.log(bloginfo) ; 


    const res = await fetch('http://localhost:3000/showpost/saveblog',{
      method : 'POST' ,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(x)
    }
     
    );
   
    window.location.reload(false);
    
    
  
  }      
   
  

   
return (
    <div>
      
            <input style={{width:"82%"}} type="submit" value="Save post" className='createpostBtns'  onClick={demo}/>
      
    
    </div>
        );
    };
    
    export default Savedpost;