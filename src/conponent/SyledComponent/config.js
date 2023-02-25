import { alpha, Box, Divider } from "@mui/material";
import styled from "styled-components";
import List from '@mui/material/List';


export const StyledDivider = styled(Divider)({
    '&.MuiDivider-root': {
      borderColor: '#eae5ff',
      '&::before':{
        width: '10%',
        borderColor: '#EAE5FF',
        borderTop: '2px solid rgba(234,229,255,0.5)',
        top: '50%',
        content: "",
      },
      
      '&::after':{
        width: '90%',
        borderTop: '2px solid rgba(234,229,255,0.5)',
        top: '50%',
        content: "",
      }
    }
  })

  export const StyledDetail = styled('div') ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    height: '100%',
    justifyContent: 'space-between'
  })

  export const StyledForm = styled('form')({
    display:'flex',
    flexDirection: 'row',
    width: '100%',
  
    '& .MuiInputBase-root':{
      color: 'white',
      backgroundColor: alpha('#000038', .2),
  
      '&:hover':{
        backgroundColor: alpha('#000038', .1),
      }
    }
    
  })


export const ItemColumn= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems:'start',
  height: '100%',
})
  
export const StyledDiv = styled('div') ({
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'start',
  })

  export const StyledBox = styled(Box)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
    
  })
  
  export const Item = styled('div') ({
    backgroundColor: alpha('#A7A5FF',0.7),
    textAlign: 'center',
    minHeight: 70,
    padding:'8px',
    width: 'auto',
    lineHeight: '60px',
    borderRadius: 7,
    height:'auto'
  })
  
  export const FireNav = styled(List)({
    flex: 2,
    backgroundColor: 'rgb(0,4,91)',
    height: '85vh',
    overflow: 'scroll',
  
    '& .MuiButtonBase-root': {
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 5,
      paddingBottom: 5,
      marginBottom: "7px",
      width: '100%',
      height: '70px',
      overflow: 'hidden',
      '&:hover' :{
        backgroundColor: 'rgb(62,60,125)',
        '& .MuiTypography-root' :{
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
    });