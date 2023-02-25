import { Box } from "@mui/material"
import styled from "styled-components"
import Contacts from "../contacts/Contacts"
import ChatBox from "../chat/ChatBox"



const MainBox = styled(Box)({
  display: 'flex',
  width: "100%",
  flexDirection: 'row',
  paddingRight: 15,
  borderRadius: 7,
  overflow: 'hidden',

})


const ChatApp = () => {


  return(
  <MainBox>

    <Contacts/>
    <ChatBox/>

  </MainBox>
  )
}

export default ChatApp