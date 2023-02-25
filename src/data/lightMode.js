import { createSlice } from "@reduxjs/toolkit";


const modeSlicer = createSlice({
  name:'chatIdSlicer',
  initialState: {
    mode: true
  },
  reducers:{
    setMode: (state) => {
      state.mode = !mode
    }
  }
})

export default modeSlicer.reducer
export const {setMode} = modeSlicer.actions