import React from 'react';
import  { useContext, useState } from 'react';
import { UserContext } from '../../App';
//import NavBar from '../NavBar/NavBar';
import './showb.css'

const Showb = ()=> 
{

    const showbloghelp= async ()=>
    {
       let url = 'http://localhost:3000/showpost/showblogs' ; 
       try
       {
        let result  = await fetch(url) ;
        return await result.json() ; 
        //return result;
       }
       catch(error)
       {
        console.log(error) ; 
       }    
    }
   
    const showallblogposts= async ()=>
    {
    let blogs = await showbloghelp() ; 
    console.log(blogs) ; 
    // let blogs = [] ; 
    // for(let i in res) blogs.push([i , res[i]]) ; 
    // console.log(blogs)
        
        let html  = ' ' ; 
        blogs.forEach(blog => 
            {
                let htmlsegment = `<div class="blog">
                <center>               
                <h2>${blog.BLOG_TITLE} </h2><center>
                <div 
                style = '
                justify-content: center;
                text-align: justify;
                border: 2px solid black;'>${blog.BLOG_CONTENT} <br> </div>
            </div>`;     
            html+=htmlsegment;
                } 
            );
            let container = document.querySelector('.profile-info') ; 
            container.innerHTML = html ; 
            

            }
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
                
            <button className='topNavBtn' onClick={showallblogposts}>Show Blog Posts</button>

                
                
                
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