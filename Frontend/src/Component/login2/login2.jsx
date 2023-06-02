import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import './login2.css';


const LogIn2 = ({state}) => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const[name , getname] = useState('') ;


    const [aboutPassword,setAboutPassword]=useState('')
    const [passConfirmation,setPassConfirmation]=useState('')
    const [wrongUser,setWrongUser] = useState('')
    let navigate  = useNavigate();
    let location = useLocation();
    let [user,setUser] = useState();
    
    
    const handleChange = (event) =>
     {
        console.log("here")  ;

        let isFormValid = true;
        setWrongUser('')
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
            const confirmPass=(event.target.value===loggedInUser['password'])?'':'password does not match'
            setPassConfirmation(confirmPass)
        }
        if (isFormValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
            
        }
    }
    
    const LogInUser =async (event)=>
    {
        event.preventDefault();
        
        

        try {
            console.log(user) ;
            console.log("in try in login2 loginuser") ; 
            const res = await fetch('http://localhost:3000/member/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
                 
            })
            
            const data = await res.json()  
            console.log("data in 68 login2")
            console.log(data)
            if(data.length === 0)
            
            
            
            
            {
                //checking if he is a deleted user
                try {
                    console.log("in try in login2 checking for deleted user") ; 
                    const res = await fetch('http://localhost:3000/member/isdeleted', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                         
                    })
               
                const data2 = await res.json()  
                console.log("data in 68 login2")
                console.log(data2);
                if(data2.rows.length!=0){setWrongUser('Your Account was previously deleted')}
                else {setWrongUser('Wrong Email or password') ; }



 }
                catch (error) {
                    console.log(error);
                }






                
            }
            else
            {

                setLoggedInUser(data[0]);
                
                window.localStorage.setItem("token",JSON.stringify(data[0]))
                const added_user ={...name}
                added_user['ID']=data[0].ID ; 
                
                   try 
                    {
                        console.log("in try in login2 checking for available notifications") ; 
                        const res = await fetch('http://localhost:3000/member/getnotifications', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(added_user)
                             
                        })
                   
                    const data3 = await res.json()  
                    console.log("data after notification")
                    console.log(data3);
                    
    
    
    
                    }
                    catch (error) {
                        console.log(error);
                    }
    
                    
                
                    
               

                             
                
                navigate(location?.state?.from || '/home', {replace:true})
            }
   
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
             <div className="form-login" style={{border:'0'}}>
                    <form>
                        <input className="login-input-field" onChange={handleChange} name="EMAIL" type="text" placeholder="     email" required/>
                        <br/><br/>
                        <input className="login-input-field" type="password" onChange={handleChange} name="PASSWORD" placeholder="      Password"required />
                        <small style={{color:'red'}}>{wrongUser}</small>
                        <br/><br/>
                        <input className="enterBtn"  type="submit" value="Log in" onClick={LogInUser}  /> <br></br>
                    {}
                        
                    </form>
                    <p className="link">
                  Don't Have an Account ? <a href="/signup">Sign Up</a>
                </p>
                </div>
           </div>
           
    
         </div>
        </div>
      );
}
    export default LogIn2;


