import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import Header2 from '../header2';
import Footer from '../Footer/Footer';
import './submit.css'



const Submit =()=>
{
    const ID = useParams() ; 
    const[probID , setID] = useState('') ;
    const [prob , setProb] = useState({}) ; 
    const [string, setString ] = useState('');
    const[incorrect , setinc] = useState('') ; 
    const [sol,setSol] = useState({});
    const [show_solve , setshow ] = useState('') ;
    const [ans,setans] = useState(0);
    const [im , setimage] = useState({}) 
    const parse = require('html-react-parser')

    useEffect(()=>
    {
        const getques= async()=>
        {
            
            console.log(ID.id)
            const res = await fetch ('http://localhost:3000/practiceques/problem/'+ID.id);
            const data = await res.json() ; 
            console.log("in data")
            console.log(data.rows) ;
            console.log(data.rows[0]) ;
            setID(ID.id)
            setProb(data.rows[0]) ; 
            setSol(data.rows[0].Discussion)
            setString(data.rows[0].DESCRIPTION) ; 
            setimage(data.rows[0].IMG) ;
            console.log(string) ; 
        }
    
        try{getques();}
        catch(error){console.log(error)} 
    
    },[])
const handlechange = async(event) =>
{
    console.log(event.target.name, event.target.value)
    console.log(ans);
    console.log(prob.SOLUTION);
    if(event.target.name==='answer'){
        setans(event.target.value);
    }
}
const submission_done = (event)=>
{

    event.preventDefault() ; 

    console.log("in sub")


    const x = {...probID} ; 
    x['ID'] = probID ; 
    setProb(x) ;  



  
    console.log(probID)
 const fetchData = async (ID) => {
          
   //console.log(ID)

    const res = await fetch('http://localhost:3000/proc/subcount',{
      method : 'POST' , 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },body: JSON.stringify(x)
    });
    const data = await res.json();
    
    
    //console.log(data);    
  }


   //console.log(probID)
  
  
   fetchData(probID)
  .catch(console.error);











    if(ans == prob.SOLUTION)
       { 
        alert("Correct Answer") ; 

        const fetchData = async (ID) => {
          
           // console.log(ID)
         
             const res = await fetch('http://localhost:3000/proc/account',{
               method : 'POST' , 
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },body: JSON.stringify(x)
             });
             const data = await res.json();
             
             
             //console.log(data);    
           }
         
         
            console.log(probID)
           
           
            fetchData(probID)
           .catch(console.error);
        

       }
    else 
        alert("The answer does not match. Please Try Again")
    
    
    
   
}
return(
    <div>
        <Header2></Header2>


        <div className='statement-container'>
                <div className='statement-que'>
                    <h3>{prob.TITLE} </h3>
                    <hr />
                    <div>
                        {parse(string)}
                    </div>
                    <div className='Im'>
                        <img src={im}></img>
                    </div>
                </div>
                <div >
                    <input type="text" name='answer' placeholder='Enter Your Answer' onChange={handlechange} />
                   
                    <input style={{border:"3px solid black",color: "red" , backgroundColor:"lime", marginTop:"50px" , marginBottom:"30px"}} type="submit" value="Submit" onClick={submission_done}/>
                </div>
            </div>



            <div>
                <button style={{border:"3px solid black",color: "red" , backgroundColor:"indigo" , marginLeft:"500px" , marginBottom:"30px"}}onClick={()=>{setshow(true)}}>Show Solution</button>
            </div>
            { console.log(sol) }
            {show_solve && 
            <div>
                
                <img src={sol}></img>

            </div>
                    } 

            <Footer></Footer>








    </div>

)
};
export default Submit ; 