import { createSlice } from '@reduxjs/toolkit'
import people from './people.json'

// Initialize the STATE
const initialState = {
    value: people, 
}

// Create a FEATURE SLICE using feature slice function which generates the actions and reducers
const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        // Peform DIRECT MUTATIONS on the state (with immer under the hood)
        setPeople: (state) => {
            state.people 
        },
    }
})

export default peopleSlice.reducer
export const {setPeople} = peopleSlice.actions