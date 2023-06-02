import styled from "styled-components";

const Main = (props) => {
  return <Container>
    <ShareBox>
      Share
    
    <div>
      <img src="/images/user.svg" alt=""/>
      <button>
        <span>
          Ask or Post
          </span></button>
    </div>

    <div>
      <button>
        <img src="/images/photos.svg" alt=""/>
        <span>Photo</span>
      </button>
      
    

    
      <button>
        <img src="/images/video.svg" alt=""/>
        <span>Video</span>
      </button>
     
    

    
      <button>
        <img src="/images/questions (1).svg" alt=""/>
        <span>Question</span>
      </button>
      
    

    
      <button>
        <img src="/images/blog (1).svg" alt=""/>
        <span>Article</span>
      </button>
      
    </div>
    </ShareBox>
    <div>
      <Article><SharedActor>
        <a>
          <img src="/images/user.svg" all=""/>
          <div>
            <span>Title</span>
            <span>Info</span>
            <span>Date</span>
          </div>
        </a>
        <button>
          <img src="/images/plus-icon.svg" alt=""/>

        </button>
      </SharedActor>
      <Description>How many stars are there in the sky?</Description>
     <SharedImg>
       <a>
      <img src="images/template-img.jpg" alt=""/>
      </a>
      </SharedImg>
      <SocialCounts>
        <li>
          <button>
            <img src="images/like.svg" alt=""/>
            <img src= "images/clap.svg" alt=""/>
            <span>75</span>
          </button>
        </li>
        <li>
         <a> 2 comments </a>
        </li>
      </SocialCounts>
      </Article>

    </div>



  </Container>;
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard= styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8 px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0/20%);
  `;

const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color:  #958b7b;
margin: 0 0 8px;
background: white;

div{
  button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600; 



  }
  &:first-child{
  display: flex;
  align-items: center;
  padding: 8px 16px 0px 10px;
  img
  {
    height: 48px;
    border-radius: 50%;
    margin-right: 8px;

  }
  button {
    margin: 4px 0;
    flex-grow: 1;
    padding-left: 16px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 35px;
    background-color: white;
    text-algn: left;
    


  }
  
  }
  &:nth-child(2){
    display: flex;
    justify-content: space-around;
    padding-bottom: 4px;

    button{
      img{
        margin: 0 4px 0 20px;
        height: 30px;
        

        

      }
      span {
        color: #70b5f9;
      }
    }



   
  }
  
  

}

`;

const Article = styled(CommonCard)`
  padding=0;
  margin= 0 0 8px;
  overflow: visible;



`;

const SharedActor= styled.div`

  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img{
      width: 48px;
      height: 48px;

    }
    & > div{
      display:flex;
      flex-direction: column;
      flex-grow:1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span{
        text-align: left;
        &:nth-child(1){
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);

        }

        &:nth-child(n+1){
          font-size: 12px;
          color: rgba(0,0,0,0.6);
        }
      }
      


      }
    }
  }
  button {
    positin: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    img {
      float: right;
    }
  }

`;

const Description= styled.div` 
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;

`;

const SharedImg= styled.div` 
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit; contain;
    width: 100%;
    height: 100%;

  }
`;

const SocialCounts= styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
    li {
      margin-right: 5px;
      font-size: 12px;
      button {
        display: flex;
        background: transparent;
        img {
          height: 20px;
          padding: 0 20px 10px 0;
        }
      }
    }
`;

export default Main;