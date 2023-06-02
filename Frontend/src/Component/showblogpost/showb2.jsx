import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import Header2 from '../header2';
import BlogList from './bloglist';
//import NavBar from '../NavBar/NavBar';
import './showb.css'


const Showb = ()=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [blogs,setPosts] = useState(null);
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 

    

    useEffect(()=>
    {
        
        let url = 'http://localhost:3000/showpost/showblogs' ;
        
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
                    setPosts(data)
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
        <div className="profile-container" id="container">
            <Header2/>
           
            <div className="profile-right">
                <div className="profile-right-header">
                    <h1>BLOG POSTS</h1>
                </div>
                <div>
                    
                
                
                    { blogs && < BlogList blogs={blogs} title="All Blogs"/>
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
    
    export default Showb;