import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "./menu/menuSlice" 

export default configureStore({
  reducer: {
    menu: menuReducer,
  },
})