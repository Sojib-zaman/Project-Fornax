import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Header2 from '../header2';
import Footer from '../Footer/Footer';
//import NavBar from '../NavBar/NavBar';
import './blog.css'

const Blog2 = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [addques , setAddQues] = useState([]) ; 
    let navigate = useNavigate() ; 
    let location = useLocation() ; 

    useEffect(
()=>
{
    const newly_added_ques = {...addques}
    newly_added_ques['USER_ID'] = loggedInUser?.ID ; 
    let dateString = Date();
   // newly_added_post['TIME'] = new Date(dateString).toISOString()
   newly_added_ques['TIME'] = dateString.toLocaleString() ;
    console.log("IN USE-EFFECT")
    
    setAddQues(newly_added_ques)
    console.log(addques)
} , []


    )


    const handleChange = (event)=>
    {
        console.log(event.target.name , event.target.value) ; 
        const newly_added_ques={...addques}
        newly_added_ques[event.target.name] = event.target.value ; 
        setAddQues(newly_added_ques)
        console.log("handle change")
        console.log(addques)


    }

    
    const handleSubmit= (event)=>
    {
        event.preventDefault();
        console.log(addques) ; 
        try {
            console.log("sending to addques ques") ;
            fetch('http://localhost:3000/addblog/blog', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addques)
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
            <div>
           <Header2></Header2> 
            </div>
        
    
    <Container>
        

    <ShareBox>

    
    
    <div>
      <img src="/images/user.svg" alt=""/>
      <button>
        <span>
         <input type="text" name="BLOG_TITLE" id="BLOG_TITLE" onChange={handleChange}  placeholder='  Enter Title' required/>
        
        

          <textarea name="BLOG_CONTENT" id="area" cols="100" rows="5" placeholder='Describe your blog post' onChange={handleChange} required></textarea>
          </span></button>
          <input type="submit" value="Submit" width="50px" className='createpostBtn' onClick={handleSubmit} />
    </div>

    <div>
      <button>
        <img src="/images/photos.svg" alt=""/>
        <span>Photo</span>
      </button>
      
    

    
      <button>
        <img src="/images/video.svg" alt=""/>
        <span>Video</span>
      </button>
     
    

    
      <button>
        <img src="/images/questions (1).svg" alt=""/>
        <span>Question</span>
      </button>
      
    

    
      <button>
        <img src="/images/blog (1).svg" alt=""/>
        <span>Article</span>
      </button>
      
    </div> 
    </ShareBox>
    <ShowPost>
      




    </ShowPost>
    </Container>
    <Footer></Footer>
    </div>
    
    );
    };

    const Container = styled.div`
    grid-area: main;
    padding-top: 150px;
    padding-bottom: 150px;
    padding-left: 250px;

  `;
  
  const CommonCard= styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8 px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0/20%);
    `;
  
  const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color:  #958b7b;
  margin: 0 0 8px;
  padding-top: 60px;
  height: 250px;
  width: 80%;
  background: white;
  
  div{
   
    button {
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600; 
        
        span{

          input{
            background: transparent;

                display: flex;
                align-items: center;
                width: 50%;
                color:#3914dd; 
          }

        
            textarea{
                background: transparent;

                display: flex;
                align-items: center;
                padding-left: 100px;
                margin-right: 0 px;
                border: none;
                background-color: transparent;
                resize: none;
                outline: none;
                
            }
        }
  
  
  
    }
    input{
        border-radius: 50px;
        width: 10%;
        margin: 15px;
        height: 45px;
        background-color:#3914dd;
        color: white;
        &:hover{
            background-color:#566fd1;
        }
    }
    &:first-child{
    display: flex;
    align-items: center;
    padding: 8px 16px 0px 10px;
    img
    {
      height: 48px;
      border-radius: 50%;
      margin-right: 8px;
  
    }
    button {
      margin: 4px 0;
      flex-grow: 1;
      padding-left: 16px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 35px;
      background-color: white;
      text-algn: left;
      
  
  
    }
    
    }
    &:nth-child(2){
      display: flex;
      justify-content: space-around;
      padding-bottom: 4px;
  
      button{
        img{
          margin: 0 4px 0 20px;
          height: 30px;
          
  
          
  
        }
        span {
          color: #70b5f9;
        }
      }
  
  
  
     
    }
    
    
  
  }
  
  `;

  const ShowPost = styled(CommonCard)`
  
  display: flex;
  flex-direction: column;
  color:  #958b7b;
  margin: 0 0 8px;
  height: 180px;
  width: 80%;
  background: white;
  `;

export default Blog2;