import styled from "styled-components";
import Leftside from "./leftside";
import Rightside from "./rightside";
import Header2 from "./header2";
import Main from "./main";
const HomePage = (props) => {
    return (
      <Container>
        <Section>
          <h5>
            <a>Need a solution of homework? - </a>
          </h5>
          <p>
            Find the answers you will need by experts on Chegg and finish your homeworks before everyone.
          </p>
        </Section>
        <Layout>
        <Leftside />
        <Main/>
        <Header2/>
        <Rightside/>
        
          
        </Layout>
      </Container>
    );
  };
  
  const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
  `;
  
  const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
  `;
  
  const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5 {
      color: #0a66c2;
      font-size: 14px;
      a {
        font-weight: 700;
      }
    }
    p {
      font-size: 14px;
      color: #434649;
      font-weight: 600;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0 5px;
    }
  `;
  
  const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    /* grid-template-row: auto; */
    margin: 25px 0;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding: 0 5px;
    }
  `;
  
  export default HomePage;