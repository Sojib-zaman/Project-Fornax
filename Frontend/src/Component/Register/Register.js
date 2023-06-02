import React, { useContext , useState } from 'react';
import './Register.css';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';


const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [goForLogin, setGoForLogin] = useState(false)
    const [aboutPassword,setAboutPassword]=useState('')
    const [passConfirmation,setPassConfirmation]=useState('')
    let navigate  = useNavigate();
    let location = useLocation();
    
    
    const handleChange = (event) => {

        let isFormValid = true;
        
        console.log(event.target.name, event.target.value)

        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value)

        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            console.log(aboutPassword)
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            const passwordInfo=!isPasswordValid?'*character must be more than 6':(!passwordHasNumber?'Must be a number(ex:1,2)':'');
            setAboutPassword(passwordInfo)
            isFormValid = isPasswordValid && passwordHasNumber
        }
        if (event.target.name === 'confirmPass') {
            const confirmPass=(event.target.value===loggedInUser['password'])?'':'password does not match'
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
            console.log("sending") ;
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
                console.log(res.data) ; 
                
            })
            .then(data=>{
                console.log(data)
                console.log('hello2')
                navigate(location?.state?.from || '/', {replace:true})
            })
        } catch (error) {
            console.log(error);
        }
            
        
    }
    

    return (
        <div>
            <div className="form-container text-center">  
                    <div className="form text-center">
                        <form action="">
                            <input className="input-field" onChange={handleChange} name="user_id" type="number" placeholder="user id" required/>
                            <input className="input-field" onChange={handleChange} name="email" type="text" placeholder="Email" required/>
                            <div className='fullNameContainer'>
                                <input className="input-field" onChange={handleChange} name="first_name" type="text" placeholder="First Name" required/>
                                <input className="input-field" onChange={handleChange} name="country" type="text" placeholder="Country" required/>
                                
                            
                            </div>
                            <div className='passwordContainer'>
                                <div>
                                    <input className="input-field" type="password" onChange={handleChange} name="password" placeholder="Password"required />
                                    <small style={{color:'red'}}>{aboutPassword}</small>
                                </div>
                                <div>
                                    <input className="input-field" onChange={handleChange}  name="confirmPass" type="password" placeholder="Confirm Passsword" required />
                                    <small style={{color:'red'}}>{passConfirmation}</small>
                                </div>
                            </div>
                            <div className='fullNameContainer'>
                                <input className="input-field" onChange={handleChange} name="type" type="text" placeholder="type" required/>
                                <input className="input-field" onChange={handleChange} name="language" type="text" placeholder="language" required/>
                            </div>
                            <input type="submit" value="Create Account" onClick={CreateUser} className="createBtn" /> 
       
                        </form>
                    </div> 

                    <div className='form-design'>
                        <h4>Welcome to Fornax</h4>
                        <h5>learn Something New everyday</h5>
                    </div>   
            </div>
            
        </div>
    );
};

export default Register;