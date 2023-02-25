import { Badge } from "@mui/material";
import styled from "styled-components";

export   const user =  {id:1, name: 'Main Charecter'}

  

export const Others = [
  {id: 123, name: 'Dendy', bio: 'im not dead, so I am alive!'},
  {id: (Math.random())*1000, name: 'JerAx', bio: 'i love smell of gassolin'},
  {id: (Math.random())*1000, name: 'Aho fu', bio: 'chi zer bin le?'},
  {id: (Math.random())*1000, name: 'Jason', bio: 'an ordnary guy'},
  {id: (Math.random())*1000, name: 'Obama ben Ladan', bio: 'Bra bob boom.. paw!'},
  {id: (Math.random())*1000, name: 'Dhol Baja', bio: 'Into Human traficing'},
  {id: (Math.random())*1000, name: 'Amar the A', bio: 'someThing Like this >,< '},
  {id: (Math.random())*1000, name: 'Json String', bio: 'A JSON placeHolder'},
]

export  const contacts = [
  {id: 1, name: 'Alex Lion',status: true ,bio: 'hi, I am front Developer'},
  {id: 2, name: 'Woodu Allen',status: false ,bio: 'hi, I University Lecturer'},
  {id: 3, name: 'Yo from Ho',status: true ,bio: 'hi, I IT student'},
  {id: 4, name: 'Fain biane',status: false ,bio: 'hi, I am React developer'},
  {id: 5, name: 'Xepher',status: false ,bio: 'hi, I am UI designer'},
]


export const StyledBadge = styled(Badge) ({
  '& .MuiBadge-badge': {
    right: 6,
    bottom: 6,
    padding: '0 4px',

  },
});
