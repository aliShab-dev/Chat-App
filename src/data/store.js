import { configureStore } from "@reduxjs/toolkit";
import leftbarSlice from "./leftBarSlice";
import chatIdSlicer from './chatId'
import modeSlicer from './lightMode'
 const store = configureStore({
  reducer:{
    leftBar: leftbarSlice,
    chat: chatIdSlicer,
    mode: modeSlicer,
  }
})

export default store