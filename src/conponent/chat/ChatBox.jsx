import { Avatar, Button, createTheme, TextField } from "@mui/material"
import styled, { ThemeProvider } from "styled-components"
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { PrimaryText, SecondaryText, StyledSmall } from "../SyledComponent/Texts";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { Item, ItemColumn, StyledBox, StyledDetail, StyledDiv, StyledForm } from "../SyledComponent/config";
import List from '@mui/material/List';
import { useSelector } from 'react-redux';


const MainBox = styled(List)({
  flex:4,
  display: 'flex',
  height:'85vh',
  flexDirection: 'column',
  alignItems: 'center',
  overflow:'auto',
  gap:25,
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 8,
  padding: 10,
  backgroundColor: 'rgba(81,88,131,.9)',

})



 

const ChatBox = () => {

const chatNum = useSelector((state)=>state.chat.id)


const [chat1,setChat1] =useState(JSON.parse(localStorage.getItem('chat1')) || [{id:1,date:'11:30' ,massage:'hi, how you doing?',isSeen: true },
{id:2,name:'xaxa', date:'11:32' ,massage:'fine, how about you?',isSeen: true },
{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true },
{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true }])

const [chat2, setChat2] = useState(JSON.parse(localStorage.getItem('chat2')) || [{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true },
{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true },
{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true }])

const [chat3, setChat3] = useState(JSON.parse(localStorage.getItem('chat3')) || [{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },

{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true },
{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true }])

const [chat4, setChat4] = useState(JSON.parse(localStorage.getItem('chat4')) || [{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },

{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true },

{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true }])

const [chat5, setChat5] = useState(JSON.parse(localStorage.getItem('chat5')) || [{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true },
{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true },
{id:1,date:'11:33' ,massage:'not good,do you have time',isSeen: true },
{id:2,name:'xaxa',date:'11:33' ,massage:'for sure, is it serous ?',isSeen: true },
{id:1,date:'11:37' ,massage:'yep, i dont know what to do about her.',isSeen: true }])

var currentChat

 switch(chatNum){
  case 1:
    currentChat = chat1
    break;
  case 2:
    currentChat = chat2
    break;
  case 3:
    currentChat = chat3
    break;
  case 4:
    currentChat = chat4
    break;
  case 5:
    currentChat = chat5
    break;
}


const [text, setText] = useState('')
const [newMessage, setNewMessage] = useState('')


    const handleSub = (e) => {
      e.preventDefault();
    }

    const onTextChange =(e) =>setText(e.target.value)

    const handleSubmit =() =>{
      if(text){
      setNewMessage({id:1,date:'12:63',massage:text,isSeen: false})
      setText("")}
    }
    
    
    useEffect(()=>{
      if(newMessage){
        switch(chatNum){
          case 1:
            setChat1([...chat1, newMessage])
            break;
          case 2:
            setChat2([...chat2, newMessage])
            break;
          case 3:
            setChat3([...chat3, newMessage])
            break;
          case 4:
            setChat4([...chat4, newMessage])
            break;
          case 5:
            setChat5([...chat5, newMessage])
            break;
        }

        setNewMessage('')
      }
    },[newMessage])
    
    useEffect(()=>{
      localStorage.setItem('chat1',JSON.stringify(chat1))
      },[chat1])
    
    useEffect(()=>{
      localStorage.setItem('chat2',JSON.stringify(chat2))
      },[chat2])
    
    useEffect(()=>{
      localStorage.setItem('chat3',JSON.stringify(chat3))
      },[chat3])
    
    useEffect(()=>{
      localStorage.setItem('chat4',JSON.stringify(chat4))
      },[chat4])

    useEffect(()=>{
      localStorage.setItem('chat5',JSON.stringify(chat5))
      },[chat5])
    

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
    <MainBox sx={{bgcolor: 'rgba(81,88,131,.9)'}} >
     
     {
      currentChat.map(massage=>(

     <StyledDiv key={Math.random()*100} style={ massage.id < 2? {flexDirection:'row', alignSelf: 'start',}:{flexDirection:'row-reverse', alignSelf: 'end',}}>
      <ItemColumn>
        <Avatar alt=""/>
      </ItemColumn>
      <Item  elevation={24}>
        <PrimaryText sx={{color: 'red'}} primary={massage.id < 2 ? 'you': massage.name}/>
        <SecondaryText primary={massage.massage}/>
      </Item>
      <ItemColumn>
        <StyledDetail style={ massage.id < 2? {flexDirection:'row', alignSelf: 'start',}:{flexDirection:'row-reverse', alignSelf: 'end',}}>

          
          <StyledSmall sx={{textAlign: 'start'}} primary={massage.date}/>
          {massage.isSeen?<DoneAllIcon sx={{color:'green'}}/>:<DoneIcon sx={{color:'green'}}/>}
         

        </StyledDetail>
      </ItemColumn>
     </StyledDiv>
      ))
     }
     
     
<StyledBox>
        <StyledForm 
        onSubmit={handleSub} >

          <TextField
          sx={{width: '100%'}}
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={2}
          variant="filled"
          value={text}
          onChange={onTextChange}
        />
  
            
          <Button
              type='submit'
              variant="contained"
              onClick={(event)=>handleSubmit(event.target)}
              >
              <SendIcon/>
          </Button>
          
        </StyledForm>

        <Button   sx={{p:0,minWidth:'60px',height:'100%'}} variant="outlined">
          <AttachFileIcon/>
          <input type="file" hidden />
        </Button>
</StyledBox>

    </MainBox>
  </ThemeProvider>

  )
}

export default ChatBox