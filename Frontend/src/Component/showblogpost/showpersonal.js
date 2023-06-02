
const PersonalBlogList = ({ blogs, title}) => {
    console.log("here")
  
  
      return (
        <div className="blog-list">
          <center><h2>{ title }</h2></center>
          {
          
        blogs.map(blog => (
          <div className="blog-preview"  >
            {console.log(blog.BLOG_TITLE)}
              <center><h1>{ blog.BLOG_TITLE }</h1>
             
              <h4>TIME : {blog.TIME}</h4>
              
              </center>
  
              <p>{ blog.BLOG_CONTENT }</p>
              {console.log("error")}
             {/* {
              <ShowComments blog_name = {blog.ID}></ShowComments>
             }  */}
  
              
  
  
            </div>
          ))}
        </div>
      );
    }
     
    export default PersonalBlogList;