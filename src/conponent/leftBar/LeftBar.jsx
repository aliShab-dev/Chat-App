import * as React from 'react';
import { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styled from 'styled-components';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { handleOpen } from '../../data/leftBarSlice';
import { useNavigate } from 'react-router-dom';




const NavHeader = styled(ListSubheader)({
  '&.MuiListSubheader-root': {
    display:'flex',
    alignItems: 'center',
    boxShadow: "-3px 10px 15px 3px rgb(0,0,71)",
    top: -10,
    height: 56,
    marginBottom: 8,
    
    '& .MuiSvgIcon-root': {
    fontSize: 45,
    color:  '#8D93ED',
    cursor: 'pointer',
  },
  '& .closeIcon': {
    fontSize: 25,
    color: '#8D93ED',
    cursor: 'pointer',
  },
  '& .MuiListItemText-root': {
    fontWeight: 800,
    color: 'red',
    
    '& .MuiTypography-root' :{
      fontSize: 25,
    }
  }
  },
 
})

const FireNav = styled(List)({
  flex: 2,
  height: '100vh',
  overflow: 'scroll',
  '& .MuiButtonBase-root': {
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 7,
    marginBottom: "7px",
    width: '97%',
    '&:hover' :{
      backgroundColor: 'rgb(62,60,125)',
      '& .MuiSvgIcon-root': {
        fontSize: 25,
        color: '#FBFFFF',
      },
      '& .MuiListItemText-root': {
        fontWeight: 500,
        color: '#fff',
      }
    },
    '&.Mui-selected':{
      backgroundColor: 'rgb(151,132,238)',
      opacity:1,
        '&:hover' :{
          backgroundColor: 'rgb(179,171,255)',
        }
    },
  },
'& .MuiListSubheader-root': {
  fontWeight: 300,
  color: '#c0c1eb' ,
  display: 'flex',
  pt: '5px',
  pb: '5px',
  width:'100%',
  position:'reletive',
},
'& .MuiListItemIcon-root': {
  minWidth: 0,
  marginRight: 16,
},
'& .MuiSvgIcon-root': {
  fontSize: 25,
  color: '#D8DAF1',
},
'& .MuiListItemText-root': {
  fontWeight: 'lighter',
  color: '#D8DAF1',
  '& .MuiTypography-root' :{
    fontSize: 12,
  }
}
});

export default function LeftBar() {
  

  const isOpen = useSelector((state) => state.leftBar.isOpen)
  
  const dispatch = useDispatch()
  
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [openedIndex, setOpenedIndex] = useState(0)
  const navigate = useNavigate()
  
  
  const handleClick = (index) => {
    if(openedIndex === index){
      setOpen(!open)
    }else{
      setOpen(true)
      setOpenedIndex(index)
    }

  };

  const selectHandler = (e,index) =>{
    setSelectedIndex(index)
  }
  
  


  return (
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
    <FireNav
      sx={isOpen?{bgcolor: 'background.paper'}:{display:'none'} }

      component="nav"
      aria-labelledby="nested-list-subheader">


    <NavHeader sx={{zIndex:12 }}>
        <ListItemIcon  fontSize="large">
          <LocalFireDepartmentIcon/>
        </ListItemIcon>
        <ListItemText  primary="Vuexy" />
     
          <CloseIcon 
          onClick={()=>{dispatch(handleOpen())}}
           /> 
       
     </NavHeader>

      <ListItemButton onClick={e=>handleClick(16)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {open && openedIndex === 16 ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 16 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>



      <ListItemButton
          selected={selectedIndex === 11}
          onClick={e => selectHandler(e, 11)}>
      
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Layouts" />
      </ListItemButton>


      <ListSubheader sx={{position:'relative'}} component="div" id="nested-list-subheader">
          APP & PAGES
      </ListSubheader>
      
      
      <ListItemButton
            selected={selectedIndex === 0}
            onClick={e => {
              selectHandler(e, 0)
              navigate("/email")
              }}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Emails" />
      </ListItemButton>

      <ListItemButton
      selected={selectedIndex === 1}
      onClick={e => {
        selectHandler(e, 1)
        navigate('/chat')
      }}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Chats" />
      </ListItemButton>

      <ListItemButton
          selected={selectedIndex === 2}
          onClick={e => selectHandler(e, 2)}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Calender" />
      </ListItemButton>

      <ListItemButton
          selected={selectedIndex === 3}
          onClick={e => selectHandler(e, 3)}>
      
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Kanban" />
      </ListItemButton>

      <ListItemButton onClick={e=>handleClick(0)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Invoice" />
        {open && openedIndex === 0 ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 0 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={e=>handleClick(1)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {open && openedIndex === 1 ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 1 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      
      <ListItemButton onClick={e =>handleClick(2)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Rules & permisions" />
        {open && openedIndex === 2 ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 2 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={e =>handleClick(3)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Authentication" />
        {open && openedIndex === 3  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 3 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={e =>handleClick(4)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Wizard" />
        {open && openedIndex === 4  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 4 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={e =>handleClick(5)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Modal & Examples" />
        {open && openedIndex === 5  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 5 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListSubheader sx={{position:'relative'}} component="div" id="nested-list-subheader">
          COMPONENTS 
      </ListSubheader>

      <ListItemButton onClick={e =>handleClick(6)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Cards" />
        {open && openedIndex === 6  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 6 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={e =>handleClick(7)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="User Interface" />
        {open && openedIndex === 7  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 7 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={e =>handleClick(8)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Extended UI" />
        {open && openedIndex === 8  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 8 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={e =>handleClick(9)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Icons" />
        {open && openedIndex === 9  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 9 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>


      <ListSubheader sx={{position:'relative'}} component="div" id="nested-list-subheader">
          COMPONENTS 
      </ListSubheader>
      
      <ListItemButton onClick={e =>handleClick(10)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Elements" />
        {open && openedIndex === 10  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 10 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={e =>handleClick(11)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Form Layout" />
        {open && openedIndex === 11  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 11 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={e =>handleClick(12)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Form Wizzard" />
        {open && openedIndex === 12  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 12 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>


      <ListItemButton
          selected={selectedIndex === 4}
          onClick={e => selectHandler(e, 4)}>
      
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Form Validation" />
      </ListItemButton>

      <ListItemButton
          selected={selectedIndex === 5}
          onClick={e => selectHandler(e, 5)}>
      
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Tables" />
      </ListItemButton>

      <ListItemButton onClick={e =>handleClick(13)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Data Tables" />
        {open && openedIndex === 13  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 13 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListSubheader sx={{position:'relative'}} component="div" id="nested-list-subheader">
          CHARTS & MAPS
      </ListSubheader>
      
      <ListItemButton onClick={e =>handleClick(14)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Data Tables" />
        {open && openedIndex === 14  ? <ExpandMore /> : <KeyboardArrowRightIcon />}
      </ListItemButton>
      
      <Collapse in={open && openedIndex === 14 && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
          selected={selectedIndex === 6}
          onClick={e => selectHandler(e, 6)}>
      
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Tables" />
      </ListItemButton>

      <ListSubheader sx={{position:'relative'}} component="div" id="nested-list-subheader">
          CHARTS & MAPS
      </ListSubheader>

      <ListItemButton
          selected={selectedIndex === 7}
          onClick={e => selectHandler(e, 7)}>
      
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Tables" />
      </ListItemButton>

      <ListItemButton
          selected={selectedIndex === 8}
          onClick={e => selectHandler(e, 8)}>
      
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Tables" />
      </ListItemButton>

    </FireNav>
    </ThemeProvider>
  );
}


