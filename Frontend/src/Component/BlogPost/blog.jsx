import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Header2 from '../header2';
import Footer from '../Footer/Footer';
import './blog.css'

const Blog = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [addBlog , setAddBlog] = useState([]) ; 
    let navigate = useNavigate() ; 
    let location = useLocation() ; 

    useEffect(
()=>
{
    const newly_added_post = {...addBlog}
    newly_added_post['USER_ID'] = loggedInUser?.ID ; 
    let dateString = Date();
   // newly_added_post['TIME'] = new Date(dateString).toISOString()
   newly_added_post['TIME'] = dateString.toLocaleString() ;
  
    console.log("IN USE-EFFECT")
    
    setAddBlog(newly_added_post)
    console.log(addBlog)
} , []


    )


    const handleChange = (event)=>
    {
        console.log(event.target.name , event.target.value) ; 
        const newly_added_post={...addBlog}
        newly_added_post[event.target.name] = event.target.value ; 
        setAddBlog(newly_added_post)
        console.log("handle change")
        console.log(addBlog)


    }

    
    const handleSubmit= (event)=>
    {
        event.preventDefault();
        console.log(addBlog) ; 
        try {
            console.log("sending to addblog blog") ;
            fetch('http://localhost:3000/addblog/blog', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addBlog)
            })
            .then((res)=>{
                res.json()
                console.log('hello');
            })
            .then(data=>{
                console.log(data)
                console.log('hello2')
                navigate(location?.state?.from || '/home', {replace:true})
             
            })
        } catch (error) {
            console.log(error);
        }
         
    }



    return (
<div>
    
    <div className='addPost-container'>
        <div>

        </div>
        <Header2></Header2>
        <div className='addPost-form'>
            <div className='post-head'>
            <h2 id='header'>Post a Blog </h2>
                <hr />
            </div>

            <div className='form'>
                
                <form action="" id='form'  className='addPost-form'>
                    <label htmlFor="BLOG_TITLE"><h3>Title</h3> </label>
                    <input type="text" name="BLOG_TITLE" id="BLOG_TITLE" onChange={handleChange}  placeholder='Enter Title' required/>
                    <br/><br/>
                    
                    <label htmlFor="BLOG_CONTENT"><h3>Description</h3> </label>
                    <textarea name="BLOG_CONTENT" id="area" cols="100" rows="5" placeholder='Describe your blog post' onChange={handleChange} required></textarea>
                    <br/><br/>
                    
                    <label htmlFor="CATEGORY"><h3>Category</h3> </label>
                    <input type="text" name="CATEGORY" id="CATEGORY" onChange={handleChange}  placeholder='Enter Your Blog Category' required/>
                    <br/><br/>
                    

                    <input type="submit" id= "button" value="Submit" className='createpostBtn' onClick={handleSubmit} />
                </form>
            </div>
        </div>
      <br></br> <div></div>
<div>
  <a href="/showblogs">
<input type="submit" value="Show All Blogs" width="50px" className='createpostBtn' id= "button2" />
</a>
</div>



   
                <div>
                  
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};


export default Blog;