import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import { decrement, increment, incrementByAmount,incrementAsync } from '../state/counter/counterSlice';
import counterSlice from '../state/counter/counterSlice';

export const Counter = () => {
    const count = useSelector((state:RootState)=>state.counter.value);
    const dispatch=useDispatch<AppDispatch>();
    useEffect(()=>{
        
        

        
    },[])
    
  return (
    <>
    <h2>Counter</h2>
    <div>{count}</div>
    <button onClick={()=>dispatch(incrementAsync(10))}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(incrementByAmount(10))}>Increment by 10</button>

    </>
  )
}
