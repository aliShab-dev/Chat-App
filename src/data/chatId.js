import { createSlice } from "@reduxjs/toolkit";


const chatIdSlicer = createSlice({
  name:'chatIdSlicer',
  initialState: {
    id: 1
  },
  reducers:{
    setId: (state,action) => {
      state.id = action.payload
    }
  }
})

export default chatIdSlicer.reducer
export const {setId} = chatIdSlicer.actions