import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState : {

    },
    inc : (state) => {

    }
})

export const {inc} = counterSlice.actions
export default counterSlice.reducer


const dispatch = useDispatch