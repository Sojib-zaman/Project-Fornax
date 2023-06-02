const Commentlist = ({comment , title }) => {
    //console.log(comment) ; 
   
      return (
        <div id="tot-com">
          
          {
            comment.map((comnt)=>{
             
              return <div className="comment-list" >
                      <h2 style={{backgroundColor:"#84ed5e" ,color:"beige", width:"190px" ,padding:"2px" ,margin:"1px"}}>{comnt.NAME}</h2>
                      <h1 style={{padding:"0px" ,marginLeft:"2px"}}>    {    comnt.COMMENTS}</h1>
                      </div>
            
            }
            )
          }
        </div>
      );
    }
     
    export default Commentlist;