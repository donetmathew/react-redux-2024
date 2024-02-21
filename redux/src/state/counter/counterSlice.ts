import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface CounterState{
    value:number;
}

const initialState:CounterState={
    value:0,
}

const counterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        // increment is an action i.e. counter/action- we domt need to explicitly add it coz redux toolkit takes care of that, 
        //but in async we have to define it explicilty 
        increment:(state)=>{
            state.value+=1; // state cannot be mutated but create Slice method creates an internal copy of state object which we can mutate and then it updates the state for us.
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByAmount:(state,action:PayloadAction<number>)=>{
            state.value+=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(incrementAsync.fulfilled,(state,action)=>{
            state.value+=action.payload;
        })
        .addCase(incrementAsync.pending,(state,action)=>{
            console.log("Promise pending");
        }).
        addCase(incrementAsync.rejected,(state,action)=>{
            console.log("error")
        })
    }
});

export const incrementAsync= createAsyncThunk(
    "counter/incrementAsync",
    async (amount:number)=>{
        await new Promise((resolve)=> setTimeout(resolve,1000));
        return amount;
    }
)

export default counterSlice.reducer;

export const {increment,decrement,incrementByAmount} =counterSlice.actions;