
import ShowAnswer from '../showanswers/show_ans';
import './qlist.css'
const PersonalQuesList = ({ questions, title}) => {
    console.log("here")
    
  
  
      return (
        <div className="blog-list">
          <center><h2>{ title }</h2></center>
          {
          
          questions.map(q => (
          <div className="blog-preview"  >
          
             
             
              <h4>TIME : {q.TIME}</h4>
              
             
  
              <p>{ q.QUES_CONTENT }</p>
              {console.log("error")}
              {/* {
            <ShowAnswer Ques_id = {q.ID}></ShowAnswer>
           }  */}
  
              
  
  
            </div>
          ))}
        </div>
      );
    }
     
    export default PersonalQuesList;