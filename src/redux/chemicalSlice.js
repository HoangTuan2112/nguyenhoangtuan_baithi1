import { createSlice } from "@reduxjs/toolkit";


const chemicalSlice = createSlice({
  name: "chemical",
  initialState: {
    chemicals: JSON.parse(localStorage.getItem("chemicals")) || [
        { id: 1, name: "Hydrochloric Acid", formula: "HCL" },
        { id: 2, name: "Sodium Chloride", formula: "NaCl" },
        { id: 3, name: "Sunfuric Acid", formula: "H2SO4" },
        { id: 4, name: "Ammonia", formula: "NH3" },
        { id: 5, name: "Ethanol", formula: "C2H5OH" },
        { id: 6, name: "z", formula: "j" },
      ],

  },
  reducers: {
    addChemical: (state, action) => {
      state.chemicals.push({
        id:
          state.chemicals.length == 0
            ? 1
            : state.chemicals[state.chemicals.length - 1].id + 1,
        name: action.payload.name,
        formula: action.payload.formula,
      });
      localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
    },
    deleteChemical: (state, action) => {
     state.chemicals= state.chemicals.filter((chemical)=>chemical.id !== action.payload);
     localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
    },
    updateChemical: (state, action) => {
      state.chemicals= state.chemicals.map((chemical)=>chemical.id === action.payload.id ? {...chemical,name:action.payload.name,formula:action.payload.formula}:chemical);
      localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
    },  
    filterChemical: (state, action) => {
      if(action.payload === ""){
        return state.chemicals = JSON.parse(localStorage.getItem("chemicals"));
        }else{
         return state.chemicals = state.chemicals.filter((chemical)=>chemical.name.toLowerCase().includes(action.payload.toLowerCase()));
        }
    },
  },
});

export const { addChemical, deleteChemical ,updateChemical,filterChemical} = chemicalSlice.actions;
export default chemicalSlice.reducer;
