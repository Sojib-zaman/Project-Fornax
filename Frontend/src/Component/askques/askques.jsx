import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
//import NavBar from '../NavBar/NavBar';
import './askques.css'

const AskQues = () => {

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
            fetch('http://localhost:3000/addques/ques', {
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
                navigate(location?.state?.from || '/nav', {replace:true})
             
            })
        } catch (error) {
            console.log(error);
        }
         
    }

//add option to create specific category 


    return (
        <div>
            
            <div className='addPost-container'>
                <div>

                </div>
                <div className='addPost-form'>
                    <div className='post-head'>
                        <h2>Ask a question</h2>
                        <hr />
                    </div>

                    <div className='form'>
                        
                        <form action="" className='addPost-form'>
                            
                            
                            <label htmlFor="QUES_CONTENT"><h3>Description</h3> </label>
                            <textarea name="QUES_CONTENT" id="area" cols="100" rows="5" placeholder='Describe your Question' onChange={handleChange} required></textarea>
                            <br></br><br></br>
 <input type="text" name="CATEGORY" id="CATEGORY" onChange={handleChange}  placeholder='Category' required/>
                            <input type="submit" value="Submit" className='createpostBtn' onClick={handleSubmit} />
                        </form>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
  <a href="/showquestions">
<input type="submit" value="Show All Questions" width="50px" className='createpostBtnforq' />
</a>
</div>
                  
                </div>
            </div>
        </div>
    );
};

export default AskQues;