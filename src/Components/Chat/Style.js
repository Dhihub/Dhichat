import Styled from 'styled-components'




export const ChatContainer = Styled.div`

  display: grid;

  grid-template-rows: auto
  grid-template-columns: 250px 1fr 500px;
  grid-template-areas:
  "chatlist messagelist info";
  grid-gap:5px;


  @media (max-width: 700px) {

grid-template-columns: auto;
grid-template-areas:

     "messagelist";

  }


`
