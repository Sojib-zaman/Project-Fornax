import React, { useContext , useState } from 'react';
import './signup.css';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';


const Signup = () => {
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
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value)

        }
        if (event.target.name === 'PASSWORD') {
            const isPasswordValid = event.target.value.length > 6;
            console.log(aboutPassword)
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            const passwordInfo=!isPasswordValid?'*character must be more than 6':(!passwordHasNumber?'Must be a number(ex:1,2)':'');
            setAboutPassword(passwordInfo)
            isFormValid = isPasswordValid && passwordHasNumber
        }
        if (event.target.name === 'confirmPass') {
            const confirmPass=(event.target.value===loggedInUser['PASSWORD'])?'':'password does not match'
            setPassConfirmation(confirmPass)
        }
        if (isFormValid) {
            const newUserInfo = { ...loggedInUser }
            newUserInfo[event.target.name] = event.target.value;
            setLoggedInUser(newUserInfo)
        }
    }

    const CreateUser = (event)=>{
        event.preventDefault();
        console.log(loggedInUser);
        try {
            console.log("sending in signup createuser") ;
            fetch('http://localhost:3000/member/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loggedInUser)
            })
            .then((res)=>{
               
                res.json()
                console.log('In signup then res')
                console.log(res.data) ; 
                
            })
            .then(data=>{
                console.log(data)
                console.log('In signup then data')
                navigate(location?.state?.from || '/', {replace:true})
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
                            
                            <input className="input-field" onChange={handleChange} name="EMAIL" type="text" placeholder="   Email" required/>
                            <br/><br/>
                            <div className='fullNameContainer'>
                                <input className="input-field" onChange={handleChange} name="NAME" type="text" placeholder="    First Name" required/>
                                <br/><br/>
                                <input className="input-field" onChange={handleChange} name="COUNTRY" type="text" placeholder="     Country" required/>
                                <br/><br/>
                                <input className="input-field" onChange={handleChange} name="IMAGE" type="text" placeholder="   post a link to your image" required/>
                                <br/><br/>
                            
                            </div>
                             
                            <div className='passwordContainer'>
                                <div>
                                    
                                    <input className="input-field" type="password" onChange={handleChange} name="PASSWORD" placeholder="    Password"required />
                                    
                                    <br/><br/>
                                    <small style={{color:'red'}}>{aboutPassword}</small>
                                </div>
                                <div>
                                    <input className="input-field" onChange={handleChange}  name="confirmPass" type="password" placeholder="    Confirm Passsword" required />
                                    <br/><br/>
                                    <small style={{color:'red'}}>{passConfirmation}</small>
                                </div>
                            </div>
                            <br/><br/>
                            <input type="submit" value="Create Account" onClick={CreateUser} className="createBtn" /> 
                            
               
     
                        </form>
               
                <p className="link">
                  <a href="#">Forgot password ?</a> Or <a href="/login">Log In</a>
                </p>
               
     
             </div>
           </div>
           
    
         </div>
        </div>
      );
    }
      
      export default Signup;