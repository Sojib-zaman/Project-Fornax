import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import './upvotes.css'
//import NavBar from '../NavBar/NavBar';


//HERE 
const Upvote = ({BLOG_ID})=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const [bloginfo,setBlogInfo] = useState({})
    const [bloginfo2,setBlogInfo2] = useState({})
    
    const demo = async () => {
        console.log("in demo")
       
        const x = {...bloginfo} ; 
        x['BLOG_ID'] = BLOG_ID ; 
        setBlogInfo(x) ;  
       
        console.log(bloginfo) ; 
    const res = await fetch('http://localhost:3000/proc/blgupvotes',{
      method : 'POST' ,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(x)
    }
     
    );

    const y = {...bloginfo2} ; 
        y['BLOG_ID'] = BLOG_ID ; 
        y['USER_ID']=loggedInUser.ID ; 
        setBlogInfo2(y) ;  

    const res2 = await fetch('http://localhost:3000/proc/upnoti',{
        method : 'POST' ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(y)
      }
       
      );
   
    window.location.reload(false);
    
    
  
  }      
  

   
return (
    <div>
   <input style={{width:"82%"}} type="submit" value="upvote" className='createpostBtnr' onClick={demo} />
    </div>
        );
    };
    
    export default Upvote;