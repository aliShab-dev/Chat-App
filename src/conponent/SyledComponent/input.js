import { InputBase } from "@mui/material";
import styled from "styled-components";

export const SearchIconWrapper = styled('div')({
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color:'rgba(234,229,255,0.74)'
})

export const StyledInputBase = styled(InputBase)({
  color: 'inherit',
  width: '80%',
  '& .MuiInputBase-input': {
    color: '#EAE5FF',
    fontSize: 16
  },
});

export const NavSearch = styled('div')({
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