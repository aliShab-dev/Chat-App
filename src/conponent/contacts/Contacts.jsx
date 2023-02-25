import { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styled, { ThemeProvider } from 'styled-components';
import { Avatar,Divider } from '@mui/material';
import { alpha, createTheme } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { PrimaryText, SecondaryText } from '../SyledComponent/Texts';
import { SearchIconWrapper, StyledInputBase } from '../SyledComponent/input';
import { FireNav, StyledDivider } from '../SyledComponent/config';
import { contacts, Others, StyledBadge, user } from '../../data/userData';
import { useDispatch, useSelector } from 'react-redux';
import { setId } from '../../data/chatId';



const NavSearch = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  position: 'reletive',
  borderRadius: '50px',
  border: '1px solid #EAE5FF',
  width: '100%',
  padding: '0px 6px',
  margin: '0 5px',
  cursor: 'pointer',
  backgroundColor: 'rgba(126,138,168,0.53)',
  
  '&:hover .wraper': {
    color: 'white',
    transform: 'scale(1.1)'
  }
})

const StyledListItem = styled('div')({
  display:'flex',
  flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 18,
    paddingBottom: 5,
    marginBottom: "7px",
    width: '90%',
    backgroundColor: 'rgb(0,4,91)',
    
    
  })

  
 


  const Contacts = () => {
    const  dispatch = useDispatch()
    const [selectedIndex, setSelectedIndex] = useState(1);
    
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  
  
  return(
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


<FireNav component="nav" aria-label="main mailbox folders">


<StyledListItem sx={{cursor: 'default'}} key={user.id}>
      <ListItemIcon>
        <Avatar src= '/pic5' alt={user.name}/>
      </ListItemIcon>
      <NavSearch >
        <SearchIconWrapper className='wraper'>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…"/>
      </NavSearch>

    </StyledListItem>
    
    <Divider sx={{borderColor: alpha('#EAE5FF','.4') }}/>
  
  {
    contacts.map((contact) =>(
      <ListItemButton key={contact.id}
      selected={selectedIndex === contact.id}
      onClick={(event) => {handleListItemClick(event, contact.id)
        dispatch(setId(contact.id))
      }}
      >
      <ListItemIcon>
        <StyledBadge
          color={contact.status ? "primary": "error"} variant="dot"
          
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Avatar src= '/pic5' alt={contact.name}/>

        </StyledBadge>
      </ListItemIcon>
      <div>
        <PrimaryText primary={contact.name} />
        <SecondaryText primary={contact.bio}/>
      </div>
    </ListItemButton>
  
  ))
}
<StyledDivider textAlign='left'>
<ListItemText sx={{color:'#EAE5FF'}} primary='Other Contacts' />
</StyledDivider>

{
  Others.map((contact)=>(
    <ListItemButton key={contact.id}>
    <ListItemIcon>
       <Avatar src= '/pic5' alt={contact.name}/>
    </ListItemIcon>
    <div>
      <PrimaryText primary={contact.name} />
      <SecondaryText primary={contact.bio}/>
    </div>
  </ListItemButton>
  ))
}


  </FireNav>
</ThemeProvider>
  )
}

export default Contacts

