import { createSlice } from "@reduxjs/toolkit";


const leftbarSlice = createSlice({
  name:'leftBarSlice',
  initialState: {
    isOpen: true
  },
  reducers:{
    handleOpen: (state)=>{
      state.isOpen= !state.isOpen 
    }
  },
})
export default leftbarSlice.reducer
export const {handleOpen} = leftbarSlice.actions