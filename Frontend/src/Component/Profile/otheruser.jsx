import React, { useState } from 'react';
import { useContext , useEffect } from 'react';
import { UserContext } from '../../App';
import Header2 from '../header2';
import './profile.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Update from './Update';

import ShowPersonalQues from '../showallques/personalq';
import Showpersonalblog from '../showblogpost/personal';

const Otheruser = () => {

const ID = useParams() ; 
console.log(ID) ; 
 const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  

const[notify , setnoti] = useState('') ; 
const[visitee , setvisitee ] = useState('')
const[otherq , setoq] = useState('');
const[otherb , setob] = useState('')
useEffect(()=>
{
    
    const getuser= async()=>
    {
        
        //console.log(ID.id)
        const res = await fetch ('http://localhost:3000/member/user/'+ID.id);
        const data = await res.json() ; 
        //console.log("in data")
       
        setvisitee(data[0])
       
        
       
    }

    try{getuser();}
    catch(error){console.log(error)} 

},[])

const userques=async()=>
{
   setoq(true);
    
}
const userblogs=async()=>
{
   setob(true);
    
}
const followuser=(event)=>
{
    event.preventDefault() ; 

    const x = {...notify} ; 
    x['FOLLOWEE_ID'] = visitee.ID ; 
    x['FOLLOWER_ID'] = loggedInUser.ID ; 
    setnoti(x) ;  



    const fetchData = async () => {
          
        
      
          const res = await fetch('http://localhost:3000/proc/notifyfollow',{
            method : 'POST' , 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },body: JSON.stringify(x)
          });
          const data = await res.json();
          
          
          //console.log(data);    
        }
      
      
         console.log(x)
        
        
         fetchData()
        .catch(console.error);
     


}

 let navigate  = useNavigate();
 let location = useLocation();

   
    return (
        
        <div class="page-content page-container" id="page-content">
            <Header2></Header2>
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-xl-6 col-md-12">
        <div class="card user-card-full">
            <div class="row m-l-0 m-r-0">
                <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                        
                        <div >
                        <img className='profile-picture' src={visitee.IMAGE}  width="500" height="500"></img>
                        </div>


                        <h6 class="f-w-600">{visitee.NAME}</h6>
                        <p>Student</p>
                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="card-block">
                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Email</p>
                                <h6 class="text-muted f-w-400">{visitee.EMAIL}</h6>
                            </div>
                            <br/>
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Country</p>
                                
                                <h6 class="text-muted f-w-400">{visitee.COUNTRY}</h6>
                            </div>
                        </div>
                    




                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Questions</p>
     
                     
     
     
     
     
    <div>    

    <input type="submit" value="Follow" width="50px" className='createpostBtn' onClick={followuser} />           
   
    <input type="submit" value="Show User's asked questions" width="50px" className='createpostBtn' onClick={userques} />
        {
            otherq && <ShowPersonalQues DEF={visitee.ID}></ShowPersonalQues>
        }


    </div>
                                <h6 class="text-muted f-w-400"></h6>
                                <br/>
                            </div>
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Posts</p>
                                <div>

                                    <div>
   <input type="submit" value="Show User's posted Blogs" width="50px" className='createpostBtn' onClick={userblogs} />
        {
            otherb && <Showpersonalblog DEF={visitee.ID}></Showpersonalblog>
        }
</div>
<br></br>



</div>
                                
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
    </div>


);
   
};

export default Otheruser;