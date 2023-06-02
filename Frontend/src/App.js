import './App.css';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Welcome from './Component/Welcome';
import HomePage from './Component/homepage';
import Profile2 from './Component/Profile/profile2';
import AskQues2 from './Component/askques/askques2';
import Login from './Component/login';
import LogIn2 from './Component/login2/login2';
import Signup from './Component/register2/signup';
import Profile from './Component/Profile/Profile';
import AskQues from './Component/askques/askques';
//import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
//import Signup from './Component/register2/signup';
import Showpersonalblog from './Component/showblogpost/personal';
import {createContext, useState} from 'react';

import Blog from './Component/BlogPost/blog';
import Showb from './Component/showblogpost/showb2';
import Showq from './Component/showallques/showq';
import ShowPersonalQues from './Component/showallques/personalq';
import PracticeSet from './Component/PracticeSet/PracticeSet';
import ShowSaved from './Component/showblogpost/showsaved';
import Submit from './Component/Submit/submit';
import Update from './Component/Profile/Update';
import Otheruser from './Component/Profile/otheruser';
import ShowAdminOptions from './Component/AdminControl/AdminControl';



export const UserContext=createContext();

function App() {
 // const [loggedInUser, setLoggedInUser]=useState();
 const [loggedInUser, setLoggedInUser]=useState(JSON.parse(window.localStorage.getItem('token')));

  const [color, changeColor] = useState("white");
  

  document.body.style.backgroundColor = color;
  
  
  return (
    <div className="App">

<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
      <header >
        
      </header>

      <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<LogIn2/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<LogIn2/>}/>
          <Route path='/profile' element={<Profile2/>}/>
          
          <Route path='/blogs' element={<Blog/>}/>
          <Route path='/questions' element={<AskQues2/>}/>
          <Route path='/showblogs' element={<Showb/>}/>
          <Route path='/showquestions' element={<Showq/>}/>
          <Route path='/personalposts' element={<Showpersonalblog DEF = {0}/>}></Route>
          <Route path='/personalquestions' element={<ShowPersonalQues DEF = {0}></ShowPersonalQues>}></Route>
          <Route path='/AdminControl' element={<ShowAdminOptions/>}/>


          <Route path='/practice' element ={<PracticeSet></PracticeSet>}></Route>
          <Route path='/practice/problem/:id' element={<Submit></Submit>}/>
          <Route path='/savedposts' element={<ShowSaved></ShowSaved>}/>
          <Route path='showblogs/user/:id' element={<Otheruser></Otheruser>}/>
          <Route path='showquestions/user/:id' element={<Otheruser></Otheruser>}/>
          <Route path='/updateinfo' element={<Update></Update>}/>
          
          <Route path="*" element={<p>There's nothing here: 404!</p>} />   
        
        </Routes>



      

      </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
