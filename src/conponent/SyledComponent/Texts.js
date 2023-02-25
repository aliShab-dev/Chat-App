import { alpha, ListItemText } from "@mui/material";
import styled from "styled-components";

export const PrimaryText = styled(ListItemText)({
  fontWeight: 'lighter',
  color: '#D8DAF1',

  '& .MuiTypography-root' :{
    fontSize: 18,
    textAlign:'start' ,
    fontWeight: 500,
  },
})

export const SecondaryText = styled(ListItemText)({
  fontWeight: 300,
  color: alpha('#EAE5FF','.7'),
  WrapText:'no wrap',

  '& .MuiTypography-root' :{
    color: alpha('#EAE5FF','.6'),
    textAlign:'start' ,
    fontSize: 14,
    fontWeight: 500,
  }
})

export const StyledSmall = styled(ListItemText)({
  color: alpha('#EAE5FF','.5'),
  WrapText:'no wrap',

  '& .MuiTypography-root' :{
    color: alpha('#EAE5FF','.6'),
    textAlign:'start' ,
    fontSize: 12,
    fontWeight: 300,
  }
})