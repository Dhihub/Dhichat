import Styled from 'styled-components'




export const ChatContainer = Styled.div`

  display:grid;
  grid-template-columns:300px auto 300px;
  grid-template-rows: auto;
  grid-template-areas:
  "header header header"
  "chatlist messagelist info";
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
