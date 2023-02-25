import { ListSubheader } from "@mui/material";
import { useSelector } from "react-redux";

const mode = useSelector((state) => state.mode.mode)

export const NavHeader = styled(ListSubheader)({
  '&.MuiListSubheader-root': {
    display:'flex',
    alignItems: 'center',
    boxShadow: "-3px 10px 15px 3px rgb(0,0,71)",
    top: -10,
    height: 56,
    marginBottom: 8,
    
    '& .MuiSvgIcon-root': {
    fontSize: 45,
    color: mode ? '#8D93ED':'#E1DBFF',
    cursor: 'pointer',
  },
  '& .closeIcon': {
    fontSize: 25,
    color: mode ? '#8D93ED':'#E1DBFF',
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






export const FireNav = styled(List)({
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
      backgroundColor: mode ? 'rgb(62,60,125)': 'rgb(18,25,8)',
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





