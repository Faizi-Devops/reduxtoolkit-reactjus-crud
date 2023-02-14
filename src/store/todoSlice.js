import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [{
    Name:"Faizan",
    Class:"Web and Mobile Application",
    Batch:"Batch 05",
    Year:2023
  }]
}

export const todoSlice = createSlice({
  name: 'todoing',
  initialState,
  reducers: {
    addTodo: (state,action) => {
        state.value.push(action.payload)


    },
    deleteTodo: (state,action) => {
      state.value.splice(action.payload.index, 1);
      
    },
    updateTodo:(state,action)=>{
      console.log(action.payload.indexing);
      console.log(action.payload.Name)
      state.value.map((value,index)=>{
        if(index === action.payload.indexing){
          value.Name = action.payload.Name;
          value.Class = action.payload.Class;
          value.Batch = action.payload.Batch;
          value.Year = action.payload.Year
        }
        else{
          return value
        }

      })

    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addTodo,updateTodo,deleteTodo } = todoSlice.actions

export default todoSlice.reducer