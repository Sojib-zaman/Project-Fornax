import React, { useContext , useState } from 'react';
import './Update.css';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';


const Update = (ID) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [goForLogin, setGoForLogin] = useState(false)
    const [aboutPassword,setAboutPassword]=useState('')
    const [passConfirmation,setPassConfirmation]=useState('')
    let navigate  = useNavigate();
    let location = useLocation();
    
    
    const handleChange = (event) => {

        let isFormValid = true;
        console.log("in signup.jsx ") 
        console.log(event.target.name, event.target.value)

        if (event.target.name === 'EMAIL') {
            loggedInUser['EMAIL'] = event.target.value ;

        }
        if (event.target.name === 'PASSWORD') {
            loggedInUser['PASSWORD'] = event.target.value ;
        }
        if (event.target.name === 'IMAGE') {
            loggedInUser['IMAGE'] = event.target.value ;
        }
        if (event.target.name === 'COUNTRY') {
            loggedInUser['COUNTRY'] = event.target.value ;
        }
        

        if (isFormValid) {
            const newUserInfo = { ...loggedInUser }
            newUserInfo[event.target.name] = event.target.value;
            setLoggedInUser(newUserInfo)
        }
    }

    const Updateuser = (event)=>{
        event.preventDefault();
        console.log("in update.jsx")
        
        console.log(loggedInUser);
        setLoggedInUser(loggedInUser)
        window.localStorage.setItem("token",JSON.stringify(loggedInUser))
        
        
        try {
            console.log("sending in update user") ;
            fetch('http://localhost:3000/member/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loggedInUser, ID)
            })
            .then((res)=>{
               
                res.json()
                console.log('In update then res')
                console.log(res.data) ; 
                
            })
            .then(data=>{
                console.log(data)
                console.log('In update then data')
                navigate(location?.state?.from || '/profile', {replace:true})
            })
        } catch (error) {
            console.log(error);
        }
            
        
    }

    return (
        <div className="main">
         <div className="sub-main">
           <div>
             <div className="imgs">
               <div className="container-image">
                 <img src="/images/mainlogo.png" alt="profile" className="profile"/>
                 
    
               </div>
    
    
             </div>
             <div>
               <h1></h1>
               <form action="">
                            
                            <input className="input-field" onChange={handleChange} name="EMAIL" type="text" value={loggedInUser.EMAIL} placeholder={loggedInUser.EMAIL} />
                            <br/><br/>
                            <div className='fullNameContainer'>
                                <input className="input-field" onChange={handleChange} name="NAME" type="text" value={loggedInUser.NAME} placeholder={loggedInUser.NAME} />
                                <br/><br/>
                                <input className="input-field" onChange={handleChange} name="COUNTRY" type="text" value={loggedInUser.COUNTRY} placeholder={loggedInUser.COUNTRY} />
                                <br/><br/>
                                <input className="input-field" onChange={handleChange} name="IMAGE" type="text" value={loggedInUser.IMAGE} placeholder=" ADD A NEW IMAGE" />
                                <br/><br/>
                            
                            </div>
                             
                            <div className='passwordContainer'>
                                <div>
                                    
                                    <input className="input-field" type="password" onChange={handleChange} name="PASSWORD" value={loggedInUser.PASSWORD} placeholder="    Password" />
                                    
                                    <br/><br/>
                                    <small style={{color:'red'}}>{aboutPassword}</small>
                                </div>
                               
                            </div>
                            <br/><br/>
                            <input type="submit" value="Update your information" onClick={Updateuser} className="createBtn" /> 
                            
               
     
                        </form>
               
               
     
             </div>
           </div>
           
    
         </div>
        </div>
      );
    }
      
      export default Update;