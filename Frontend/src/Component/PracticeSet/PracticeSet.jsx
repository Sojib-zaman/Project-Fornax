import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import Header2 from '../header2';
import Footer from '../Footer/Footer';
import './PracticeSet.css'
import Problem from '../Practice/showProb';

const PracticeSet=()=>
{
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    
    const[prob , SetProb] = useState([])


    
    useEffect(()=>
    {
        
        let url = 'http://localhost:3000/practiceques/practiceques' ;
        
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
                    SetProb(data)
                   // console.log(data)
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


    //console.log(prob.rows) 
   // console.log(typeof(prob))
    let nprob = Object.entries(prob);
    //console.log(nprob[1]);
    console.log(prob)

   

    return(
        <div>
            <Header2></Header2>
            <h1 style={{height:'100px',margin:'20px'}}>Problems</h1>
            
            
            
            
            <div className='problem-container'>
                
                <div className='problem-show'>
                    {
                         
                         
                         
                        prob.map((problem)=>{
                           return  <Problem problem={problem}></Problem>
                        })
                    }
                </div>
            </div>







            <Footer></Footer>
        </div>




    )

}
export default PracticeSet ;