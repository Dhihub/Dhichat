import Styled from 'styled-components'




export const ChatContainer = Styled.div`

  display: grid;

  grid-template-rows: auto
  grid-template-columns: 100px 1fr 100px;
  grid-template-areas:
  "chatlist messagelist info";
  grid-gap:5px;

margin: 30px;
  @media (max-width: 700px) {

grid-template-columns: auto;
grid-template-areas:

     "messagelist";

  }


`
