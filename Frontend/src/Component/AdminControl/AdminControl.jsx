import Axios from "axios";
import { useState } from "react";
import { render } from "react-dom";
import Header2 from "../header2";
import "./Admin.css";

function ShowAdminOptions() {
  const [name, setName] = useState("");
  const[ID , setID] = useState('') ; 
const [admin, setAdmin] = useState("");
const [Email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  const [userList, setUserList] = useState([]);
let v = 0;
const [newRole, setnewRole] = useState('');
const [makeadmin, setmake] = useState('');






  const addNewUser = () =>
 {
    Axios.post("http://localhost:3000/admin/createUserByAdmin", {
      NAME: name,
      COUNTRY: country,
      EMAIL :Email,
      PASSWORD : password,
      IMAGE:image,
      ADMIN : admin,
    }).then(() => {
      setUserList([
        ...userList,
        {
          NAME: name,
      COUNTRY: country,
      EMAIL :Email,
      PASSWORD : password,
      IMAGE:image,
      ADMIN : admin,

        },
        window.location.reload(false)


      ])
    });
    
   
  };

  const getUsers = (event) => {
    event.preventDefault();
    const newly_added_ques = {... name}
    newly_added_ques['NAME'] = name; 

    console.log(name)

    const getpartuser=(async)=>
    {
      try {
        console.log("sending to getting particular user") ;
        fetch('http://localhost:3000/admin/getuser', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newly_added_ques)
        })
        .then(res=>{ console.log(res.data) ;
          
            return res.json()
            
        })
        .then(data=>{
            console.log(data)
           
            setUserList(data)
        })
    } catch (error) {
        console.log(error);
    }
     
    }
    getpartuser() ; 
   
    

  };

  const updateUserAdmin = (id) => {
    Axios.post("http://localhost:3000/admin/updatebyAdmin", { ID: id }).then(
      (response) => {
        window.location.reload(false)
      }
    );
  };

  const deleteUser = (id , EMAIL) => {
   
    const newly_added_ques = {... name}
    newly_added_ques['ID'] = id; 
    newly_added_ques['EMAIL'] = EMAIL; 

    
    try {
      console.log("sending in delete user") ;
      fetch('http://localhost:3000/member/delete', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newly_added_ques)
      })
      .then((res)=>{
         
          res.json()
          
          console.log(res.data) ; 
          
      })
      .then(data=>{
          console.log(data)
          console.log('In delete then data')
          window.location.reload(false)
      })
  } catch (error) {
      console.log(error);
  }



  };

  return (
    <div className="Admin">
      <Header2></Header2>
      
      <div className="information">
      
        <label>Name:</label>
        
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
	<label>Password:</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
    <label>Image:</label>
        <input
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
       <label>Admin Control : </label>
        <input
          type="text"
          onChange={(event) => {
            if(event.target.value=='ADMIN')
                setAdmin(1);
            
          }}
        />
        
        <button style={{backgroundColor:"red"}} onClick={addNewUser }>Add User</button>






      </div>
      <div className="employees">

        <label>User name to find user:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button style={{backgroundColor:"red"}} onClick={getUsers}>Show user</button>
 { }   
        {
        
              
        userList.map((val, key) => {
           {if (val.ADMIN==null){ v='Not an Admin'}
          else{v='Admin'} }
          return (
            <div className="user">
              <div>
                <h3>Name: {val.NAME}</h3>
                <h3>Email: {val.EMAIL}</h3>
                <h3>Country: {val.COUNTRY}</h3>
               
                <h3>Admin Role :{v}</h3>
                
              </div>
              <div>
                
                <button  style={{backgroundColor:"red"}}
                  onClick={() => {
                    updateUserAdmin(val.ID)
                  }}
                >
                  {" "}
                  Promote to admin
                </button>

                <button  style={{backgroundColor:"red"}}
                  onClick={() => {
                    deleteUser(val.ID , val.EMAIL);
                  }}
                >
                  Delete User
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowAdminOptions;