import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Header2 from '../header2';
import './profile.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Update from './Update';
const Profile2 = () => {

 const [loggedInUser,setLoggedInUser] = useContext(UserContext);
 let navigate  = useNavigate();
 let location = useLocation();

    
 const Deleteacc = ()=>
 {
    
     try {
         console.log("sending in delete user") ;
         fetch('http://localhost:3000/member/delete', {
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(loggedInUser)
         })
         .then((res)=>{
            
             res.json()
             console.log('In delete then res')
             console.log(res.data) ; 
             
         })
         .then(data=>{
             console.log(data)
             console.log('In delete then data')
             navigate(location?.state?.from || '/', {replace:true})
         })
     } catch (error) {
         console.log(error);
     }
    }
   
   
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
                        <img className='profile-picture' id='profilepicture'  src={loggedInUser.IMAGE}  width="500" height="500"></img>
                        </div>


                        <h6 class="f-w-600"  id='name'>{loggedInUser.NAME}</h6>
                        <p>Student</p>
                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="card-block">
                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600"  id='info'>Information</h6>
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Email</p>
                                <h6 class="text-muted f-w-400"  id='mail'>{loggedInUser.EMAIL}</h6>
                            </div>
                            <br/>
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Country</p>
                                
                                <h6 class="text-muted f-w-400" id='country'>{loggedInUser.COUNTRY}</h6>
                            </div>
                        </div>
                    <div>
                    
                    <a href='/updateinfo'>
                    <input type="submit" value="Update my information " width="50px"  id='buttonUpdate' />
                    </a>
                   

                    
                    <input id='buttonDelete' type="submit" value="Delete my account" width="50px"  onClick={Deleteacc}/>
                    
                    </div>




                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Questions</p>
     
                     
     
     
     
     
    <div>
                    
    <a href="/personalquestions">
    <input type="submit" value="Show My asked questions" width="50px" className='showmything' />
    </a>
</div>
                                <h6 class="text-muted f-w-400"></h6>
                                <br/>
                            </div>
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Posts</p>
                                <div>
    <a href="/personalposts">
    <input type="submit" value="Show My Posted Blogs" width="50px" className='showmything'  />
    </a>


    <a href="/savedposts">
    <input type="submit" value="Show My Saved Blogs" width="50px" className='showmything'  />
    </a>



</div>
                                <h6 class="text-muted f-w-400"></h6>
                                <br/>
                            </div>
                        </div>
                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                        </ul>
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

export default Profile2;