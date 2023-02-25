import * as React from 'react';
import styled from 'styled-components';
import { Box } from "@mui/system"
import ChatApp from '../chatApp/ChatApp';
import Navbar from '../navbar/Navbar';


const MainBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',

  paddingLeft: 15,
  paddingRight: 15,
  flex: 7,
})

export default function Main() {



    return (

      <MainBox >
        <Navbar/>
        <ChatApp/>
      </MainBox>
    );

}
