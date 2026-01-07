import Sidebar from "@/components/sidebar";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHidden: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    SidebarToggle(state) {
      state.isHidden = !state.isHidden;
    },
    // show(state) {
    //   state.isHidden = !state.isHidden;
    // }
  },
});

// export const { hide, show } = menuSlice.actions
export const { SidebarToggle } = menuSlice.actions;

export default menuSlice.reducer;
