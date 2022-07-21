import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    array: null,
}

export const CardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        initialize: (state, action) => {
            state.array = action.payload;
        },
        add: (state, action) => {
            state.array.push(action.payload);
        },
        edit: (state, action) => {
            state.array.splice(action.index,1,action.payload);
        },
        remove: (state, action) => {
            state.array.splice(action.index,1)
        },
    },
})

// Action creators are generated for each case reducer function
export const { add, edit, remove, initialize } = CardSlice.actions

export default CardSlice.reducer