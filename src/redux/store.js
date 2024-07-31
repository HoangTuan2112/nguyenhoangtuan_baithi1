import { configureStore } from "@reduxjs/toolkit";
import chemicalSlice from "./chemicalSlice";

export const store = configureStore({
  reducer: {
    chemical: chemicalSlice,
  },
});
