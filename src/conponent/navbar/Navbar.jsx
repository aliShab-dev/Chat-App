import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { AppRegistration, Search } from '@mui/icons-material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Button, createTheme, InputBase, ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { handleOpen } from '../../data/leftBarSlice';



const SearchIconWrapper = styled('div')({
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})


const NavBar = styled(AppBar)({

  '&.MuiAppBar-root': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    position: "sticky",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
    color: '#D4D7FF'
  }
})


const StyledInputBase = styled(InputBase)({
  color: 'inherit',
  width: '80%',
  '& .MuiInputBase-input': {
    padding: 1,
    color: '#EAE5FF',
    fontSize: 20
   },
});

const NavSearch = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  position: 'reletive',
  borderRadius: '6px',
  width: '50%',
  padding: 10,
  margin: '0 25px',
  cursor: 'pointer',
  backgroundColor: 'rgba(126,138,168,0.53)',

  '&:hover .wraper': {
    color: 'white',
    transform: 'scale(1.1)'
  }
})

const StyledIconButton = styled(IconButton)({

  '&:hover, &:focus': {
    '& svg:first-of-type': {
      transform: 'translateX(-4px) rotate(-20deg) scale(1.5)',

    },
   },
})


export default function Navbar() {
  const isOpen = useSelector(state => state.leftBar.isOpen)
  const dispatch = useDispatch()


  return (
    <Box >
    <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(151,132,238)' },
            background: { paper: 'rgb(0,4,91)' },
          },
        })}
      >

      <NavBar sx={{bgcolor: 'background.paper'}} >



        <Button sx={ !isOpen ? {p:0,minWidth:'40px',height:'40px',marginLeft:'15px'}:{display:'none'}}
        variant="outlined"
        
        onClick={()=>dispatch(handleOpen())}
        >
          <WidgetsIcon/>
        </Button>

          <NavSearch >
                <SearchIconWrapper className='wraper'>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…"/>
          </NavSearch>

      
        <Toolbar>
         
          <StyledIconButton>
            <AppRegistration/>
          </StyledIconButton>

          <StyledIconButton>
            <NotificationsNoneIcon/>
          </StyledIconButton>

          <StyledIconButton>
            <SettingsIcon/>
          </StyledIconButton>
          <IconButton>
          <Avatar src= '/pic5' alt="Redux"/>
          </IconButton>

        </Toolbar>
      </NavBar>
      </ThemeProvider>
    </Box>
  );
}