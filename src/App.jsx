import styled from '@emotion/styled';
import { Box } from "@mui/system"
import './App.css';
import LeftBar from './conponent/leftBar/LeftBar';
import Main from './conponent/main/Main';
import Email from './conponent/email/Email';
import { Outlet, BrowserRouter, Routes, Route} from 'react-router-dom'

const MainContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  margin: 0,
})


const MainBox = styled(Box)({
display: 'flex',
flexDirection: 'column',

paddingLeft: 15,
paddingRight: 15,
flex: 7,
})

function App() {
  
  const Layout = () => {
    return(
      <MainContainer sx={{bgcolor: 'rgb(5, 30, 52)'}} >
      <LeftBar />
    
      <MainBox >
      <Outlet />
      </MainBox>
    
    </MainContainer>
      

    )


  }
  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>} >
      <Route path='/chat' element={<Main/>}></Route>
      <Route path='/email' element={<Email/>}></Route>
    </Route>
  </Routes>
</BrowserRouter>

  );
}

export default App;
