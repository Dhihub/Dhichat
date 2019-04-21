import Styled from 'styled-components'




export const ChatContainer = Styled.div`

  display:grid;
  grid-template-columns:400px 1fr ;
  grid-template-rows: 100vh;
  grid-template-areas:

  "chatlist messagelist ";
  grid-gap:5px;


  @media (max-width: 800px) {

grid-template-columns: auto;
grid-template-rows: 50px 300px 1fr;
grid-template-areas:
     "header"
     "messagelist"
     "chatlist";

  }


`
