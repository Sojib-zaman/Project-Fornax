import AddAns from '../showanswers/addans';
import ShowAnswer from '../showanswers/show_ans';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import './qlist.css'
const Questionlist = ({ Questionlist, title, Admin}) =>
{
  const [name, setName] = useState("");

 
    console.log(Admin)
    let nblog = Object.entries(Questionlist);
    
  
      return (
        <div id="bloglist_2">
        <center id = "headtitle">{ "WELCOME TO PROJECT FORNAX QUESTION SECTION" }</center>
          {
          nblog[1][1].map(Question => (
            <div id='bloglist-preview' >

        <div id="ques_content">
              <h1>{ Question.QUES_CONTENT }</h1></div>
              
           
            <center id='otherQuesInfo'>
              <h3>Asked by :
              <Link style={{textDecoration : "None !important"}} to={'user/'+Question.ID_1 } >
                { Question.NAME}</Link></h3>
              <h4>TIME : {Question.TIME}</h4>
              <h4>Category : {Question.CATEGORY}</h4>
              </center>
             
            
  
              {
            <ShowAnswer Ques_id = {Question.ID}></ShowAnswer>
           } 
           {
            <AddAns Ques_id = {Question.ID}></AddAns>
           }


             
              
  
  
            </div>
          ))}
        </div>
      );
    }
     
    export default Questionlist;